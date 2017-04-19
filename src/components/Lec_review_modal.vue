<template>
  <!-- review -->
  <div v-if="isvisibles" class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
          <form id="pointWriteArea">
            <fieldset>
              <legend><h1 class="blind">리뷰</h1></legend>
                <h2 class="review__rating__title"><strong>홍길동</strong> 튜터의 수업은 어떠셨나요?</h2>
                <div class="t_layer_view">
                  <div class="drag_star">

                    <div class="review__lists">

                      <div class="review__list ">
                        <ul>

                          <li class="st_off" id="curriculum" v-for ="(value, key) in ratings">
                            <h3 class="review__rating__subtitle">{{value}}</h3>
                            <lec-review-modal-rating :title = "key" ></lec-review-modal-rating>
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
        readiness: "준비성",
        timeliness: "시간준수",
        delivery: "전달력",
        friendliness: "친절도"
      },

      add: {
          talent_pk: +this.$route.params.lecid,
          // curriculum: 1,
          // readiness	: 3,
          // timeliness: 4,
          // delivery: 2,
          // friendliness: 1,
          comment: ""
      },
    }
  },
  props:['isvisibles'],
        // ['']
  methods: {
    closeModal: function() {
      this.$store.commit('resetreview')
      this.$emit('isvisibles')

    },
    submitReview(){
      if(!this.add.comment || this.add.comment === " "){
        return alert("내용을 입력하셔야죠!!!!!!")
      }
      this.$store.commit("setreview", this.add.comment)
      this.$store.commit("settalent_pk", this.add.talent_pk)

      this.$http.post(`talent/add/review/`,this.$store.state.rating.add,{
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    })
    .then(function(data){
      this.$store.commit('resetreview')
      this.$emit('reflesh')
      this.$emit('isvisibles')
      console.log("data:",data)

    })
    .catch( error => {
      console.log("error:",error)
    });
  }
},
  components: {
    LecReviewModalRating
    },
  created() {
    // console.log("kaaaaaaaaaaaaaaaaaa");
  },
}

</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/common_login_join"
</style>
