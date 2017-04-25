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
                  {{detailAll.locations[0] ? detailAll.locations[0].region : ""}}
                </strong>
                <span>
                  {{detailAll.locations[0] ? detailAll.locations[0].results[0].specific_location : ""}}
                </span>

                </li>
                <li class="apply__info__time">
                <i class="fontello icon-clock"></i>
                <strong>{{detailAll.hours_per_class + " "}} 시간/회 </strong>
                <span>
                  {{detailAll.locations[0] ? detailAll.locations[0].results[0].time[0] : ""}}
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
                  {{detailAll.locations[0] ? detailAll.locations[0].results[0].day : ""}}
                </strong>
                <span>총 {{detailAll.number_of_class}}회 / {{String(detailAll.hours_per_class * detailAll.number_of_class * detailAll.price_per_hour).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ " "}}원</span>
              </li>
              <li class="apply__info__additional-cost">
                <i class="fontello icon-won"></i>
                <strong>추가비용 <span>
                  {{detailAll.locations[0] ? detailAll.locations[0].results[0].extra_fee === "y" ? "있음" : "없음" : ""}}

                </span></strong>
                <span>
                  {{detailAll.locations[0] ? detailAll.locations[0].results[0].extra_fee_amount : ""}}

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
            <button type="button" @click = "applySubmit" class="apply__buttons__btn-apply">수업 신청하기</button>
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
      applyData: {
        location_pk: this.detailAll.locations[0].results[0].pk,
        message_to_tutor:"좋은 강의 부탁 드립니다."
      },
    }
  },
  props: ["detailAll"],
  created(){
    // bus.$on('wishrefreash', () => {this.refreash()})
    bus.$on('wishrefreash', () => {this.refreash()})
    this.refreash()

  },


  computed: {
    // is_wishList(){
    //   console.log("login????????")
    //   var wish = this.$store.state.login.wishlist.results
    //   var islogin = this.$store.state.login.is_login
    //   var self = this
    //   if(this.$store.state.login.is_login === true){
    //     wish.forEach(function(item){
    //       if( item.pk === +self.$route.params.lecid ) {
    //         console.log("위시리스에 추가 되어 있는 강의 입니다.")
    //         // self.is_wishList = true
    //         // return
    //         return true
    //       }
    //       // console.log("위시리스에 없는 강의 입니다")
    //       // return false
    //       // self.is_wishList = false;
    //     })
    //   } else {
    //     return false
    //
    //     // self.is_wishList = false
    //   }
    // }
  },

  mounted() {
    // bus.$on('wishrefreash', () => {this.refreash()})
    // this.refreash()


  },

  methods: {
    refreash(){
      console.log("login????????")
      var wish = this.$store.state.login.wishlist.results
      console.log(wish);
      var islogin = this.$store.state.login.is_login
      var self = this
      if(this.$store.state.login.is_login === true){
        for (var i = 0; i < wish.length ; i++) {
          if (wish[i].pk === +self.$route.params.lecid) {
            self.is_wishList = true
                console.log("위시리스에 추가 되어 있는 강의 입니다.")

            return
          } else  {
            self.is_wishList = false
                // console.log("위시리스에 없는 강의 입니다")

          }
        }
        // wish.forEach(function(item){
        //   if( item.pk === +self.$route.params.lecid ) {
        //     console.log("위시리스에 추가 되어 있는 강의 입니다.")
        //     return self.is_wishList = true
        //
        //   } else {
        //     console.log("위시리스에 없는 강의 입니다")
        //     self.is_wishList = false;
        //   }
        // })
      } else {
        self.is_wishList = false
        return

        // self.is_wishList = false
      }
    },
    // toggleWishList(){
    //   this.is_wishList = !this.is_wishList
    // },
    submitWish(){
      // this.refreash()
      if(!this.$store.state.login.is_login){
        alert("로그인이 필요합니다. ")
        return;
      }
      this.$http.get(`talent/${this.$route.params.lecid}/wish-list/toggle/`,{
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    })
      .then(function(response){
          // this.wishlist()
          bus.$emit('wishlistRefreash')
          console.log("wishirefreash");

          console.log("response:",response)
          if(response.status === 201){
            // this.is_wishList = true
            alert("위시리시트에 추가 되었습니다. 마이페이지에서 찜한 목록을 확인할 수 있습니다!")

          } if(response.status === 200){
            // this.is_wishList = false
            alert("위시리시트에 삭제되었습니다. ")
            return
          }
        })
      .catch(function(err){
        console.log("response_err:",err)
        switch(err.status){
          case 401 : alert("로그인을 하세요!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          break;
          default : return err.json()

          }
        })
        .then( error => {
          console.error("error!! Json",error)
          alert(error.detail)
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

    applySubmit(){
      if(!this.$store.state.login.Token){
        alert("로그인을 하셔야 합니다.")
        return
      }

      this.$http.post('talent/add/registration/', this.applyData, {
        headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
      .then(function(response){
        console.log("user-detail-response:",response)
        return response.json()
      })
      .then(function(data){
        console.log("data:",data)
        alert("성공적으로 수업이 신청되었습니다" )
        bus.$emit('registrationRefreash')

      })
      .catch( error => {
        console.error("error",error)

        return error.json()
      })
      .then( error => {
        console.error("error",error)
        alert(error.detail)
      });

  },
}


}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_apply"
  </style>
