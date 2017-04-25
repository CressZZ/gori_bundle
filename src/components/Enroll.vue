<template lang="html">
  <div class="wrapper-enroll-all">
  <div class="wrapper-enroll">
    <section class="wrapper-enroll-section">

      <div class="profile__wrapper__user">
        <h2 class="hidden__heading">profile</h2>
        <div class="member__info">
          <img :src="`${userinfo.profile_image}`" :alt="`${userinfo.name}의 사진`" class="member__info-img">
            <!-- <a href="#" title="프로필 이미지 팝업" class="member__info-img__edit">EDIT</a> -->
          <p class="member__username">{{userinfo.name}}</p>
        </div>
        <table class="profile__list">
          <caption class="hidden__heading">회원정보</caption>
          <tbody class="profile__list__detail">
             <tr>
               <th class="profile__list__detail-id">아이디</th>
               <td>{{userinfo.user_id}}</td>
             </tr>
             <tr>
              <th class="profile__list__detail-nickname">닉네임</th>
              <td>{{userinfo.nickname}}</td>
             </tr>
             <tr>
              <th>전화번호</th>
              <td>{{userinfo.cellphone}}</td>
             </tr>
          </tbody>
        </table>
        <div class="enroll__button-wrapper">
          <router-link tag="button" :to = "{ name: 'myinfo'}"  class="enroll__myinfo ">나의정보 수정</router-link>

          <!-- <button type="button" class="enroll__myinfo">나의정보 수정</button> -->
          <router-link tag="button" :to = "{ path: '/enroll/register'}"  class="enroll__myinfo ">수업등록 </router-link>
          <!-- <button type="button" class="enroll__regist-class">수업 등록 </button> -->
        </div>
      </div>

      <div class="member__info__lec">
        <h3 class="hidden__heading">나의수업정보</h3>
        <ul class="member__info__lec-list">
          <li class="member__info__lec-list__item member__info__lec-took">
            <a href="#">
              <p>받은수업신청서</p>
              <strong>{{userinfo.received_registrations}}건</strong>
            </a>
          </li>

          <!-- <router-link tag="li" :to = "{ path:  '/enroll/wishList'}"  class="member__info__lec-list__item  member__info__lec-apply"><a href="#"> <p>신청한수업</p>
          <strong>{{userinfo.received_registrations}}건</strong></a></router-link> -->

          <router-link tag="li" :to = "{ path: '/enroll/appledList'}"  class="member__info__lec-list__item  member__info__lec-wish"><a href="#"><p>신청한수업</p>

          <strong>{{userinfo.sent_registrations}}건</strong></a></router-link>


          <!-- <li class="member__info__lec-list__item  member__info__lec-wish">
            <a href="#">
              <p>위시리스트</p>
              <strong>{{userinfo.wish_list}}건</strong>
            </a>
          </li> -->


  <router-link tag="li" :to = "{ path: '/enroll/wishList'}"  class="member__info__lec-list__item  member__info__lec-wish"><a href="#"><p>위시리스트</p>
  <strong>{{userinfo.wish_list}}건</strong></a></router-link>


          <!-- <li class="member__info__lec-list__item  member__info__lec-my">
            <a href="#">
              <p>내수업</p>
        <strong>{{userinfo.received_registrations}}건</strong>
            </a>
          </li> -->

      <router-link tag="li" :to = "{ path: '/enroll/myLecList'}"  class="member__info__lec-list__item  member__info__lec-my"><a href="#"><p>내수업</p>
      <strong>{{appledList.count}}건</strong></a></router-link>

    </ul>

    </div>
    </section>

    <transition name="slide"  mode="out-in">

    <router-view></router-view>

    </transition>


  </div>
  </div>
</template>

<script>
import {bus} from '../bus'

export default {
  data(){
    return {

      appledList:[],
      myLecList: []

    }
  },
  props: ["detailAll"],
  created() {

    bus.$on('talentsrefreash', () => {this.talentsrefreash()})

    console.log("this.$store.state.login.loginInfo:",this.$store.state.login.loginInfo)
    this.talentsrefreash()

  //
  //   this.$http.get('member/registrations/', {
  //   headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
  // }),

  // this.$http.get('member/talents/', {
  // headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
  // })
  // .then(function(response){
  //     console.log("dsdfdsfsdfd",response);
  //     return response.json()
  // })
  // .then(function(data){
  //     this.appledList = data
  //     // this.myLecList = data.results
  //     console.log("sdfsfsdfs",this.appledList);
  // })


  },

  computed:{
    userinfo(){
      return this.$store.state.login.loginInfo
    }
    // tutotinfo(){
    //   return this.$store.state.login.loginInfo
    // }
  },
  methods:{
    talentsrefreash(){
      this.$http.get('member/talents/', {
      headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
      })
      .then(function(response){
          console.log("dsdfdsfsdfd",response);
          return response.json()
      })
      .then(function(data){
          this.appledList = data
          // this.myLecList = data.results
          console.log("sdfsfsdfs",this.appledList);
      })
    }
  }
}
</script>

  <style lang="sass">
    .slide-leave-active
      animation: slide-out 0.5s


    .slide-enter-active
      animation: slide-in 0.5s

    @keyframes slide-in
      from
        transform: translateX(-1000px)

      to
        transform: translateX(0px)
        opacity: 1

    @keyframes slide-out
      from
        transform: translateX(0px)
      to
        transform: translateX(1000px)
        opacity: 0


  </style>
