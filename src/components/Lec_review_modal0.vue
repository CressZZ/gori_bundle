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
                      <h3 class="review__rating__subtitle">종합점수</h3>
                        <ul>
                          <li class="st_off" id="total">
                            <lec-review-modal-rating></lec-review-modal-rating>
                          </li>
                        </ul>
                        <span class="blind">종합점수</span><span class="star_count"><em id="totalValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                      </div>
                      <div class="review__list ">
                        <h3 class="review__rating__subtitle">커리큘럼</h3>
                        <ul>
                          <li class="st_off" id="curriculum">
                            <lec-review-modal-rating></lec-review-modal-rating>
                          </li>
                        </ul>
                        <span class="blind">커리큘럼</span><span class="star_count"><em id="curriculumValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                      </div>
                      <div class="review__list ">
                        <h3 class="review__rating__subtitle">전달력</h3>
                        <ul>
                          <li class="st_off" id="skills">
                            <lec-review-modal-rating></lec-review-modal-rating>
                          </li>
                        </ul>
                      <span class="blind">전달력</span><span class="star_count"><em id="skillsValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                      </div>
                        <div class="review__list ">
                          <h3 class="review__rating__subtitle">준비성</h3>
                          <ul>
                            <li class="st_off" id="preparation">
                              <lec-review-modal-rating></lec-review-modal-rating>
                            </li>
                          </ul>
                        <span class="blind">준비성</span><span class="star_count"><em id="preparationValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                        </div>
                        <div class="review__list ">
                          <h3 class="review__rating__subtitle">친절도</h3>
                          <ul>
                            <li class="st_off" id="dedication">
                              <lec-review-modal-rating></lec-review-modal-rating>
                            </li>
                          </ul>
                        <span class="blind">친절도</span><span class="star_count"><em id="dedicationValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                        </div>
                        <div class="review__list ">
                          <h3 class="review__rating__subtitle">시간준수</h3>
                          <ul>
                            <li class="st_off" id="punctuality">
                              <lec-review-modal-rating></lec-review-modal-rating>
                            </li>
                          </ul>
                        <span class="blind">시간준수</span><span class="star_count"><em id="punctualityValue"><span class="blind">0</span></em><span class="blind"> 총 </span></span>
                        </div>
                      </div>

                </div>
                <div class="review-content">
                  <textarea name="content" rows="5" cols="30" placeholder="솔직한 리뷰를 작성해주세요 " id="content" v-model="add.comment"></textarea>
                <button type="submit" class="review__btn__add" @click="submitReview">리뷰 작성</button>
                </div>
              </div>
            </fieldset>
            </form>
             <button class="modal-close" @click="closeModal">X</button>
          </div>
          </div>


</template>

<script>
import LecReviewModalRating from './Rating.vue'

export default {
  data: function() {
    return {
      add:{
        talent_pk: this.$route.params.lecid,
        // v-model="add.curriculum"
        curriculum: "",
        // v-model="add.readiness"
        readiness	: "",
        // v-model="add.timeliness"
        timeliness: "",
        // v-model="add.delivery"
        delivery: "",
        // v-model="add.friendliness"
        friendliness: "",
        comment: ""
      },
      // addReview: null
    }
  },
  props:['isvisibles'],
        // ['']
  methods: {
    closeModal: function() {
      console.log('clicked');
      this.$emit('isvisibles')
    },
    submitReview(){
      console.log('modal!!clicked');

      if(!this.add.comment || this.add.comment === " "){
        return alert("내용을 입력하셔야죠!!!!!!")
        // this.
      }
      this.add.comment = this.add.comment;
      this.add.comment = null;
      this.$http.post(`talent/add/review/`,this.add,{
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
    })
    // .then(function(response){
    //   console.log("response:",response)
    //   if(response.status === 201){
    //     this.is_wishList = true
    //     alert("위시리시트에 추가 되었습니다. 마이페이지에서 찜한 목록을 확인할 수 있습니다!")
    //   } else if(response.status === 200){
    //     this.is_wishList = false
    //     alert("위시리시트에 삭제되었습니다. ")
    //     console.log(data)
    //     return response.json()
    //   }
    // })
    .then(function(data){
      console.log("data:",data)
      // this.$emit('reflesh')
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
