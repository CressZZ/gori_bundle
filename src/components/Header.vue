
<template lang="html">
    <div>
      <!-- skip-nav -->
      <a href="search-class" class="skip-nav">본문 바로가기</a>
        <!-- header -->
        <header class="header">
          <div class="header__wrapper">
          <!-- 고리 로고 -->
            <div class="header__heading">

              <h1 class="header__logo">
                <div class="header__logo__wrapper">
                  <router-link to="/">
                    <p class="header__logo--title">Gori</p>
                  </router-link>
                </div>
              </h1>
              <button class="header__navi__btn-menu--open   "  :class="{off: !isoffs}" type="button" name="button" @click="isoff"><i class="icon-menu"></i></button>
              <button class="header__navi__btn-menu--close   "  :class="{off: isoffs}"  @click="isoff" type="button" name="button" ><i class="icon-cancel"></i></button>

            </div>
            <!-- menu -->
            <!--  <ul class="header__navi__lnb_list off<<<<<">-->

            <nav class="header__navi":class="{off: isoffs}">
                <ul class="header__navi__lnb_list"  >
                  <router-link tag="li" :to = "{ name: 'list'}" class="navi_menu_search"> <a href="#" >검색</a></router-link>


                  <router-link tag="li" :to = "{ name: 'tutor'}"  class="navi_menu navi_menu_tutor is_login" :class= "{off: !islogin}" > <a href="#" >튜터등록</a></router-link>
                  <!-- <li class="navi_menu navi_menu_service ">
                    <a href="#" @click = "verifyTalent" >강의 승인</a>

                  </li> -->

                    <li class="navi_menu navi_menu_service ">
                      <a href="#" @click = "submitLogin" >서비스소개</a>
                    </li>
                </ul>

                <ul class="header__navi__lnb_list-sec-2">
                  <li class="navi_menu navi_menu_join  is_logout" :class= "{off: islogin}">
                    <a href="#"  @click = "joinvisible">회원가입</a>
                  </li>
                  <router-link tag="li" :to = "{ name: 'myinfo'}"  class="navi_menu navi_menu_join  is_login" :class= "{off: !islogin}" > <a href="#" >마이페이지</a></router-link>


                  <li  class="navi_menu navi_menu_login is_logout " :class= "{off: islogin}">
                    <a href="#"  @click = "loginvisible">로그인
                    </a>
                  </li>
                  <li class="navi_menu navi_menu_login is_login" :class= "{off: !islogin}">
                    <a href="#" @click = "logout" >로그아웃</a>
                  </li>

                </ul>

            </nav>

          </div>
        </header>

   </div>
</template>

<script>
import {bus} from '../bus'
export default {
  data(){
    return{
      isoffs: true,
      // islogin: this.$store.state.login.is_login,
      WindowWidth: window.innerWidth,
      currentPage: "pc",
      loginInfo: {
        username: "dkt@dkt.dkt",
        password: "qweasd123"
      }
    }
  },
  methods: {
    logout(){
      alert("로그아웃 완료")
      sessionStorage.setItem('is_login', false)
      this.islogouts()
      sessionStorage.clear()
      this.$router.push({ name: 'main' })
    },
    submitLogin() {
      this.login(this.loginInfo)
    },
    login(loginInfo){
      this.$http.post('member/login/', loginInfo)
      .then(function(response){
        console.log("login-response:",response)
        return response.json()
      })
      .then(function(data){
        sessionStorage.setItem('Token', data.key)
        sessionStorage.setItem('is_login', JSON.stringify(true))
        console.log("login-data:",data)
        alert("로그인 완료!!")
        this.userInfo()
        this.wishlist()
        this.registrationlist()
      })
      .catch( error => {
        console.log("error-login!!!",error)
        if(error.status === 400){
          alert("아이디와 비밀번호를 확인하세요")
        }
        // return error.json()
      })
      // .then( error => {
      // });
    },
    //
    userInfo(){
      this.$http.get('member/profile/user/', {
        headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
      })
      .then(function(response){
        console.log("user-response:",response)
        return response.json()
      })
      .then(function(data){
        console.log("user-data:",data)
        sessionStorage.setItem('loginInfo', JSON.stringify(data))
        this.loginUpdate()

        // this.$store.commit('loginInfo', data)
      })
      .catch(function(err){
        console.log("err:",err.bodyText)
      })
    },
    wishlist(){
      this.$http.get('member/wish-list/', {
        headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
      })
      .then(function(response){
        console.log("wishlist-response:",response)
        return response.json()
      })
      .then(function(data){
        console.log("wishlist-data:",data)
        sessionStorage.setItem('wishlist', JSON.stringify(data))
        this.loginUpdate()

        // this.$store.commit('wishlist', data)

        // 최근 삭제
        bus.$emit('wishrefreash')

        // return
      })
      .catch( error => {
        return error.json()
      })
      .then( error => {
        // console.error("error",error)
        // alert(error)
      });
    },


    registrationlist(){
      this.$http.get('member/registrations/', {
      headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
      })
      .then(function(response){
        console.log("dsdfdsfsdfd",response);
        return response.json()
      })
      .then(function(data){
        sessionStorage.setItem('registration', JSON.stringify(data))
        this.loginUpdate()

        // this.appledList = data
        console.log("sdfsfsdfs",this.appledList);
      })
    },


    loginvisible(){
      console.log("click:")
      bus.$emit('loginvisible')
    },
    joinvisible(){
      bus.$emit('joinvisible')
    },
    isoff(){
      if(this.windowWidth < 689){
        this.isoffs = !this.isoffs
      }
    },
    verifyTalent(){
      // this.$http.get('member/staff/verify/talent/23/', {
      //   headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      // })
      // .then(function(response){
      //   console.log("verifyTalent-response:",response)
      //   return response.json()
      // })
    },

    windowResize(e){
      this.windowWidth = e.currentTarget.innerWidth;
      console.log("windowWidth:",this.windowWidth)
      if (this.windowWidth > 690){
        this.isoffs = false
        this.currentPage = "pc"
      } else if (this.windowWidth < 689){
        if(this.currentPage === "pc"){
          this.isoffs = true
          this.currentPage = "mobile"
        }
      }
      // if (this.windowWidth < 599){
        // this.isoffs = true
      // }
    },
    loginUpdate(){
      console.log("session_login:",JSON.parse(sessionStorage.getItem("is_login")))
      if (JSON.parse(sessionStorage.getItem("is_login")) === true){
        this.$store.commit("islogin")
        this.$store.commit("Token", sessionStorage.getItem("Token"))
        this.$store.commit("loginInfo", JSON.parse(sessionStorage.getItem("loginInfo")))
        this.$store.commit("wishlist", JSON.parse(sessionStorage.getItem("wishlist")))
        this.$store.commit("registration", JSON.parse(sessionStorage.getItem("registration")))

      }
    },
    islogouts(){
      console.log("session_login:",JSON.parse(sessionStorage.getItem("is_login")))
      if (JSON.parse(sessionStorage.getItem("is_login")) === false){
        this.$store.commit("islogout")
      }
    }
  },
  computed: {
    islogin(){
        if(!this.$store.state.login.is_login){
          return JSON.parse(sessionStorage.getItem("is_login"))
        } else {
          return this.$store.state.login.is_login
        }
    }
  },
  created() {
    if (JSON.parse(sessionStorage.getItem("is_login"))){
      this.userInfo()
      this.wishlist()
      this.registrationlist()
    }

    bus.$on('userInforRefreash', () => {this.userInfo()})
    bus.$on('wishlistRefreash', () => {this.wishlist()})
    bus.$on('registrationRefreash', () => {this.registrationlist()})
    bus.$on('submitLogin', (loginInfo) => {this.login(loginInfo)})


    console.log("this.$store.state.login.is_login:",this.$store.state.login.is_login)
    this.windowWidth = window.innerWidth
    if (this.windowWidth > 690){
      this.currentPage = "pc"
      this.isoffs = false
    } else if (this.windowWidth < 689) {
      this.currentPage = "mobile"
      this.isoffs = true
    }
    window.addEventListener('resize', this.windowResize);
  },
  beforeDestroy: function () {
   window.removeEventListener('resize', this.windowResize)
 },
}
</script>

<style lang="sass">
  .header__navi__btn-menu--open
    // transition: all 1s

  // @import "../sass/total"
  // @import "../sass/main-index"
</style>
