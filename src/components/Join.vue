<template >
  <div id="join" v-cloak  >
    <div v-if="isVisible" class="modal is-active">
      <div class="modal-background" @click="closeModal">

      </div>
      <div class="modal-content" >
        <div class="box">
          <div class="sign-up__container">
            <h1 class="sign-up__heading">회원가입</h1>
            <form class="sign-up__field ng-pristine ng-valid ng-valid-email ng-valid-required">
              <label class="info skip-nav" for="email"></label>
              <input id="email" type="email" placeholder="이메일 주소" title="회원가입 이메일 주소 입력" ng-model="email" required="" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-email ng-valid-required" v-model = "joinInfo.username">
              <label for="name" class="a11y"></label>
              <input id="name" type="text" title="회원가입 이름 입력" placeholder="이름" ng-model="nickname" required="" class="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" v-model = "joinInfo.name">
              <label for="password" class="a11y"></label>
              <input id="password" type="password" title="회원가입 비밀번호 입력" placeholder="비밀번호(6자 이상)" ng-model="pw" required="" class="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" v-model = "joinInfo.password1">
              <label class="skip-nav" for=""></label>
              <input type="password" placeholder="비밀번호 확인" required="" title="비밀번호 확인" ng-model="pw" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required" v-model = "joinInfo.password2">
              <div class="checkbox-custom checkbox-default">
                <input id="policy" type="checkbox" required>
                <label for="policy" class="policy">서비스 이용 약관에 동의합니다.</label>
              </div>
              <button class="join__email-btn" ng-click="Join()" @click = "submitLogin">회원가입</button>
            </form>
            <div class="facebook__join ng-scope" data-ng-controller="FBLoginController">
              <button class="facebook__join-btn" ng-click="FBLogin()">facebook 회원가입</button>
            </div>

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
      joinInfo: {
          username: "",
          password1: "",
          password2: "",
          name: ""
      }
    }
  },
  methods: {
    submitLogin(){
      this.$http.post('member/signup/', this.joinInfo)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        this.$store.commit('Token', data.key)
        this.$store.commit('joinInfo', this.joinInfo)
        this.closeModal()
        this.joinInfo.username = "";
        this.joinInfo.password1 = "";
        this.joinInfo.password2 = "";
        this.joinInfo.name = "";

      })
      .catch( error => {
        console.log("error:",error)
      });
    },
    // keyClose
    closeModal: function() {
      // console.log('clicked');
      // this.$emit('joinnonVisible');
      this.isVisible = false
    }
  },
  // props: ['joinvisibles'],

  created(){
    bus.$on('joinvisible', () => {this.isVisible = true})


  },
  mounted(){

  },

}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/common_login_join"
</style>
