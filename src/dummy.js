// [
//     {
//       id: 1,
//       type: "Q",
//       name: "박영진",
//       date: "99.03.24",
//       time: "99:20",
//       content: "되라 제말",
//       answer: {
//         is_answer: true,
//         type: "A",
//         name: "xbxj",
//         date: "99.03.24",
//         time: "99:20",
//         content: "답변입니다. "
//       },
//     },
//     {
//       // is_answer: false,
//       id: 2,
//       type: "Q",
//       name: "박숙미",
//       date: "399.03.24",
//       time: "39:20",
//       content: "얍!",
//       answer: {
//         is_answer: false,
//         type: "A",
//         name: "xbxj",
//         date: "99.03.24",
//         time: "99:20",
//         content: "답변입니다. "
//       },
//     },
//   ],
//
//   newQuestion: {
//     id: 4,
//     type: "Q",
//     name: "박영진",
//     date: "99.03.24",
//     time: "99:20",
//     content: "dsssd"
//   }






<template lang=“html”>
 <!-- apply -->
 <section class=“apply”>
   <h2 class=“hidden__heading”>수업 상세정보</h2>

     <div class=“apply__wrapper”>
       <div class=“apply__info”>
         <!-- div빼고 ul만 살림 (이전에는 div가 ul을 감싸는 구조로, div가 필요 없다고 판단) -->
         <div class=“”>
           <ul class=“apply__info__list “>
             <li class=“apply__info__location”>
               <i class=“fontello icon-location”></i>
               <strong>{{detailAll.locations[0] ? detailAll.locations[0].region : “”}}</strong>
               <span>{{detailAll.locations[0].specific_location}}</span>
               </li>
               <li class=“apply__info__time”>
               <i class=“fontello icon-clock”></i>
               <strong>{{detailAll.hours_per_class + ” “}} 시간/회 </strong>
               <span>{{detailAll.locations[0].time[0]}}</span>
               </li>
               <li class=“apply__info__group”>
               <i class=“fontello icon-group-circled”></i>
               <strong>{{detailAll.type}}</strong>
               <span>{{detailAll.type === “1:1 수업” ? “” : “최소인원 2명“}}</span>
             </li>
             <li class=“apply__info__week”>
               <i class=“fontello icon-calendar”></i>
               <strong>{{detailAll.locations[0].day}}</strong>
               <span>총 {{detailAll.number_of_class}}회 / {{String(detailAll.hours_per_class * detailAll.number_of_class * detailAll.price_per_hour).replace(/\B(?=(\d{3})+(?!\d))/g, “,”)+ ” “}}원</span>
             </li>
             <li class=“apply__info__additional-cost”>
               <i class=“fontello icon-won”></i>
               <strong>추가비용 <span>{{detailAll.locations[0].extra_fee === “y” ? “있음” : “없음“}}</span></strong>
               <span>{{detailAll.locations[0].extra_fee_amount ? detailAll.locations[0].extra_fee_amount : “”}}</span>
             </li>
           </ul>
         </div>
       </div>


         <div class=“apply__buttons” v-model=“user_wish”>
           <button
           class=“apply__buttons__btn-wish”
            @click.prevent = “toggleWishList”
            @click=“submitWish”>찜하기
             <a href=“#” class=“apply__buttons__heart”>
               <i v-bind:class=“{ ‘icon-heart-empty’: !is_wishList, ‘icon-heart’: is_wishList }“></i>
             </a>
           </button>
           <button class=“apply__buttons__btn-apply”>수업 신청하기</button>
           <!-- 하트를 div에서 a로 change 함. 클릭이 되야 한다고 판단 -->
         </div>

     </div>

 </section>
</template>

<script>
import {bus} from ‘../bus’
export default {
 data(){
   return {
     is_wishList: false,
     user_wish:‘위시리스트에 등록 되었습니다!’
   }
 },
 props: [“detailAll”],

 methods: {
   toggleWishList(){
     // console.log(“addWishList”);
     this.is_wishList = !this.is_wishList
   },
   submitWish(){
     this.$http.post(`talent/${this.$route.params.lecid}/wish-list/toggle/`)

     submitWish(){
       this.$http.post(`talent/${this.$route.params.lecid}/wish-list/toggle/`,{
       headers: {Authorization: `Token ${this.$store.state.login.Token}`}
     })
     .then(function(response){
         return response.json()
         })
     .then(function(data){
       alert(“위시리스트에 등록 되었습니다!“)
     })
         .catch(function(error){
           console.log(error.message);
         });
       // this.$store.commit(‘Token’, data.key)
     },
   }
}
</script>

 <style lang=“sass”>
   // @import “../sass/gen_source”
   // @import “../sass/gen_mixin”
   // @import “../sass/lec_apply”
 </style>
