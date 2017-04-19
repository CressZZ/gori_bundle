<template lang="html">
  <!-- review -->
  <section class="review" id="review">
    <div class="row">
      <div class="review-section-1 col-4-4 col-7-12">
        <h2 class="review__heading">리뷰 {{detailReview.count}}건</h2>
        <div>
          <button type="button" class="review__btn" @click="isvisible">리뷰작성 + </button>
        </div>
      </div>
    </div>
    <div class="review-section-2 row">

      <ul class="col-4-4 col-7-12 row review__stars">
        <li v-for="(value, key) in detailAll.average_rates">
          <strong>{{key === "total" ? "합계" : key === "curriculum" ? "커리큘럼" : key === "readiness" ? "준비성" : key === "timeliness" ? "시간준수" : key === "delivery" ? "전달력" : key === "friendliness" ? "친절도" : ""}}</strong>
          <div class="reveiw__stars__total">
            <div v-if = "value >= 5" class="star-1st"><i class="icon-star"></i></div>
            <div v-if = "value >= 4" class="star-2nd"><i class="icon-star"></i></div>
            <div v-if = "value >= 3" class="star-3rd"><i class="icon-star"></i></div>
            <div v-if = "value >= 2" class="star-4th"><i class="icon-star"></i></div>
            <div v-if = "value >= 1" class="star-5th"><i class="icon-star"></i></div>
          </div>
        </li>
      </ul>

    </div>
    <div class="review__write">

      <div class="row" v-for="item in reviewpage">
        <div class="review__write__writer col-4-4 col-7-12">
          <div class="review__write__writer__info-1">
            <img class="review__write__writer__picture" src="../media/img/user.jpg">
            <strong class="review__write__writer__id">{{item.user.name}}</strong>
          </div>
          <div class="review__write__writer__info-2">
            <time class="review__write__writer__info__date" data-type="date">
              {{item.created_date.substring(0,10)}}
            </time>
            <p class="review__write__writer__descrip">{{item.comment}}</p>
          </div>
        </div>
      </div>


    </div>
    <div class="row">
      <div class="review__page col-4-4 col-7-12">
        <a v-for = "n in pagenum" href="#" class="riview__page__btn on_page" @click.prevent = "changePage(n)">{{n}}</a>
        <!-- <a href="#" class="qna__page__btn">2</a>
        <a href="#" class="qna__page__btn">3</a> -->
      </div>

    </div>

    <lec-review-modal @reflesh= "reflesh" :isvisibles="isvisibles" @isvisibles = "isvisible">
    </lec-review-modal>

  </section>


</template>

<script>
import LecReviewModal from './Lec_review_modal.vue'

export default {
  data(){
    return{
      isvisibles: false,
      count_per_page: 4,
      page_to: 1,

    }
  },
  props: ["detailReview", "detailAll"],

  methods: {
    isvisible() {
      this.isvisibles = !this.isvisibles
      console.log('click');
    },
    changePage(n){
       this.page_to = n
    },
    pagenumadd(){
      this.pagenum = Math.ceil(this.detailReview.count / this.count_per_page)
    },
    reflesh(){
      this.$emit('reflesh')
    }
  },
  watch:{
    detailReview(){
      this.pagenumadd()
    }
  },
  components: {
    LecReviewModal,

  },
  computed:{
    reviewpage(){
      const from = ((this.page_to * this.count_per_page) - this.count_per_page)
      const to = this.page_to * this.count_per_page
      return this.detailReview.results.reverse().slice(from, to)
    },
  },
  created(){
      // this.questionpage;
      this.pagenumadd()
  },


}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_review"
  </style>
