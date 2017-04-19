<template lang="html">
  <!-- apply -->
  <section class="apply">
    <h2 class="hidden__heading">수업 상세정보</h2>

      <div class="apply__wrapper">
        <div class="apply__info">
          <!-- div빼고 ul만 살림 (이전에는 div가 ul을 감싸는 구조로, div가 필요 없다고 판단) -->
          <div class="">
            <ul class="apply__info__list ">
              <li class="apply__info__location">
                <i class="fontello icon-location"></i>

                <strong>
                  {{detailAll.locations[0].region}}
                </strong>
                <span>
                  {{detailAll.locations[0].results[0].specific_location}}
                </span>

                </li>
                <li class="apply__info__time">
                <i class="fontello icon-clock"></i>
                <strong>{{detailAll.hours_per_class + " "}} 시간/회 </strong>
                <span>
                  {{detailAll.locations[0].results[0].time[0]}}
                </span>
                </li>
                <li class="apply__info__group">
                <i class="fontello icon-group-circled"></i>
                <strong>{{detailAll.type}}</strong>
                <span>{{detailAll.type === "1:1 수업" ? "" : "최소인원 2명"}}</span>
              </li>
              <li class="apply__info__week">
                <i class="fontello icon-calendar"></i>
                <strong>
                  {{detailAll.locations[0].results[0].day}}
                </strong>
                <span>총 {{detailAll.number_of_class}}회 / {{String(detailAll.hours_per_class * detailAll.number_of_class * detailAll.price_per_hour).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ " "}}원</span>
              </li>
              <li class="apply__info__additional-cost">
                <i class="fontello icon-won"></i>
                <strong>추가비용 <span>
                  {{detailAll.locations[0].results[0].extra_fee === "y" ? "있음" : "없음"}}

                </span></strong>
                <span>
                  {{detailAll.locations[0].results[0].extra_fee_amount ? detailAll.locations[0].results[0].extra_fee_amount : ""}}

                </span>
              </li>
            </ul>
          </div>
        </div>

 <!-- @click.prevent = "toggleWishList" -->
          <div class="apply__buttons">
            <button
            class="apply__buttons__btn-wish"

             @click.prevent="submitWish">찜하기
              <a href="#" class="apply__buttons__heart">
                <i v-bind:class="{ 'icon-heart-empty': !is_wishList, 'icon-heart': is_wishList }"></i>
              </a>
            </button>
            <button class="apply__buttons__btn-apply">수업 신청하기</button>
            <!-- 하트를 div에서 a로 change 함. 클릭이 되야 한다고 판단 -->
          </div>

      </div>

  </section>
</template>

<script>
import {bus} from '../bus'
export default {
  data(){
    return {
      is_wishList: false,

    }
  },
  props: ["detailAll"],
  created(){
    bus.$on('wishrefreash', () => {this.refreash()})

  },


  computed: {
  },

  mounted() {
    this.refreash()
    bus.$on('wishrefreash', () => {this.refreash()})
    

  },

  methods: {
    refreash(){
      console.log("login????????")
      var wish = this.$store.state.login.wishlist.results
      var islogin = this.$store.state.login.is_login
      var self = this
      if(this.$store.state.login.is_login === true){
        wish.forEach(function(item){
          if( item.pk === self.$route.params.lecid ) {
            self.is_wishList = true
            console.log("true!!")
            return
          }
          console.log("false!!")
          // self.is_wishList = false;
        })
      } else {
        // self.is_wishList = false
      }
    },
    toggleWishList(){
      this.is_wishList = !this.is_wishList
    },
    submitWish(){
      this.refreash()
      if(!this.$store.state.login.is_login){
        alert("로그인이 필요합니다. ")
        return;
      }
      this.$http.get(`talent/${this.$route.params.lecid}/wish-list/toggle/`,{
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    })
      .then(function(response){
          this.wishlist()
          console.log("response:",response)
          if(response.status === 201){
            this.is_wishList = true
            alert("위시리시트에 추가 되었습니다. 마이페이지에서 찜한 목록을 확인할 수 있습니다!")

          } if(response.status === 200){
            this.is_wishList = false
            alert("위시리시트에 삭제되었습니다. ")
            return
          }
        })
      .catch(function(err){
        console.log("response_err:",err)
        switch(err.status){
          case 401 : alert("로그인을 하세요!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          break;
          default : alert("error!",err.body.detail);
          }
        });
      },
      wishlist(){
        this.$http.get('member/wish-list/', {
          headers: {Authorization: `Token ${this.$store.state.login.Token}`}
        })
        .then(function(response){
          console.log("user-detail-response:",response)
          return response.json()
        })
        .then(function(data){
          console.log("data:",data)
          this.$store.commit('wishlist', data)
        })
        .catch(function(err){
          console.log("err:",err.bodyText)
        })
      },
    }


}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_apply"
  </style>
