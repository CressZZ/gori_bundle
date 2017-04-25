<template lang="html">
  <div id="login"  v-cloak >
    <div v-if="isVisible" class="modal is-active" >
      <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content" >
        <div class="box">
        <div class="login__container">
            <h1 class="login__heading">로그인</h1>
            <form class="login__field ng-valid ng-valid-email ng-valid-required">
              <label class="skip-nav" for="">이메일주소</label>
              <input type="email" placeholder="이메일 주소" title="이메일 주소" ng-model="email" value="123@gmail.com" required="" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-email ng-valid-required" v-model ="loginInfo.username">

              <label class="skip-nav" for="">비밀번호</label>

              <input type="password" placeholder="비밀번호" required="" title="비밀번호" ng-model="pw" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"  v-model = "loginInfo.password">

              <button type="button" class="login__email-btn" ng-click="Login()" @click = "submitLogin">로그인</button>
              <div class="checkbox-custom checkbox-default">
                <input id="remember_me" name="user[remember_me]" type="checkbox">
                <label for="remember_me">로그인 상태 유지</label>

              </div>
            </form>
            <div class="login_else">
              <div class="panel-line">
                <hr class="divider">
                <div class="or">or</div>
              </div>
            <div class="facebook__login ng-scope" data-ng-controller="FBLoginController">
              <!-- <p>이미 페이스북으로 가입하셨다면</p> -->
              <button class="facebook__login-btn" ng-click="FBLogin()">facebook 로그인</button>
            </div>
            </div>
            <div class="panel-line">
              <hr class="divider">
            </div>
            <p class="member__ctrl">
              <a href="#">아이디 찾기 </a>
              <span>|</span>
              <a href="#"> 비밀번호 찾기 </a>
              <span>|</span>
              <a href="/#/signup"> 회원가입</a>
            </p>
             <button class="modal-close" @click="closeModal">X</button>
          </div>
          </div>
          </div>
        </div>

  </div>
</template>


<script>
import {bus} from '../bus'

export default {
  data: function() {
    return {
      isVisible: false,
      loginInfo: {
        username: "",
        // email: "",
        password: "",
      },

    }
  },

  methods: {
    closeModal: function() {
      this.isVisible = false
    },
    submitLogin() {
      // this.login()
      console.log(":click login");
      bus.$emit('submitLogin', this.loginInfo)
      this.loginInfo.username = ""
      this.loginInfo.password = ""
      this.closeModal()
    },
  },

  created(){
    //헤더에서 로그인 클릭하면 활성화 됨
    bus.$on('loginvisible', () => {this.isVisible = true})
  },

}






</script>

<style lang="sass">


</style>
