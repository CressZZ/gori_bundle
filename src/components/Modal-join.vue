<template lang="html">
  <div>
  <div v-if="is_visible" class="modal is-active">

  <div class="modal-content">
    <div class="box">
    <div class="login__container">
        <h1 class="login__heading">로그인</h1>
        <form class="login__field ng-valid ng-valid-email ng-valid-required">
          <label class="skip-nav" for="">이메일주소</label>
          <input type="email" placeholder="이메일 주소" title="이메일 주소" ng-model="email" value="123@gmail.com" required="" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-email ng-valid-required">
          <label class="skip-nav" for="">비밀번호</label>
          <input type="password" placeholder="비밀번호" required="" title="비밀번호" ng-model="pw" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required">
          <div class="checkbox-custom checkbox-default">
          <button class="login__email-btn" ng-click="Login()">로그인</button>
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
      <div class="modal-background" @click="closeModal"></div>
    </div>
  </div>


</template>

<script>
export default {
}
</script>

<style lang="sass">
  @import "../sass/total"
  // @import "../sass/common_footer"
</style>
