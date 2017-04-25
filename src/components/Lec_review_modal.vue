<template>
  <!-- review -->
  <div v-if="isvisibles" class="modal is-active" >
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
          <form id="pointWriteArea">
            <fieldset>
              <legend><h1 class="blind">리뷰</h1></legend>
                <h2 class="review__rating__title"><strong>{{detailAll.tutor.name}}</strong> 튜터의 수업은 어떠셨나요?</h2>
                <div class="t_layer_view">
                  <div class="drag_star">

                    <div class="review__lists">

                      <div class="review__list ">
                        <ul>

                          <li class="st_off star-raing-box" v-for ="(value, key) in ratings">
                            <h3 class="review__rating__subtitle">{{value}}</h3>
                            <lec-review-modal-rating :title = "key" class="star-raing-sub" ></lec-review-modal-rating>
                          </li>

                        </ul>
                      </div>
                    </div>

                </div>
                <div class="review-content">
                  <textarea name="content" rows="5" cols="30" placeholder="솔직한 리뷰를 작성해주세요 " id="content" v-model="add.comment"></textarea>
                <button type="button" class="review__btn__add" @click="submitReview">리뷰 작성</button>
                </div>
              </div>
            </fieldset>
            </form>
             <!-- <button class="modal-close" @click="closeModal">X</button> -->
          </div>
          </div>


</template>

<script>
import LecReviewModalRating from './Rating.vue'

export default {
  data: function() {
    return {
      ratings:
        {
        curriculum: "커리큘럼",
        readiness: "준  비  성",
        timeliness: "시간준수",
        delivery: "전  달  력",
        friendliness: "친  절  도"
      },

      add: {
          talent_pk: +this.$route.params.lecid,
          comment: ""
      },
    }
  },
  props:['isvisibles','detailAll'],
        // ['']
  methods: {
    closeModal: function() {
      this.add.comment = ""

      this.$store.commit('resetreview')
      this.$emit('isvisibles')
    },
    submitReview(){
      if(!this.add.comment || this.add.comment === " "){
        return alert("내용을 입력하셔야죠!!!!!!")
      }
      var rate = this.$store.state.rating.add
      if(!rate.friendliness ||!rate.curriculum ||!rate.readiness ||!rate.timeliness ||!rate.delivery ){
        return alert("별점을 빠짐없이 입력하셔야죠!!!!!!")
      }
      this.$store.commit("setreview", this.add.comment)
      this.$store.commit("settalent_pk", this.add.talent_pk)
      this.$http.post(`talent/add/review/`,this.$store.state.rating.add,{
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    })
    .then(function(data){
      this.$emit('reflesh')
      // this.add.comment = ""
      // this.$store.commit('resetreview')
      // this.$emit('isvisibles')
      this.closeModal()
      console.log("data:",data)
    })
    .catch( error => {
      console.error("error",error)
      return error.json()

    })
    .then( error => {
      console.error("error",error)
      // alert(error.detail)
    });
  }
},
  components: {
    LecReviewModalRating
    },
  created() {
    // console.log(">>>>>>>>>>>>",this.item);
  },
}

</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/common_login_join"
</style>
