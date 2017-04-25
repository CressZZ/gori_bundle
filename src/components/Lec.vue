<template lang="html">

  <div class="lec-wrap">
  <!-- <p>parameter ID {{id}}</p> -->
  <!-- <join>

  </join>

  <login :visible="visibles" @nonVisible = "nonVisible">

  </login> -->
<transition name="fade"  mode="in-out">
  <Loading  v-if="!isLoading">
  </Loading>
</transition>
<transition name="fade"  mode="in-out">

  <lec-summary v-if="isLoading" v-for="item in detailAllArrayTrick"  :key="id" :detailAll = "detailAll">

  </lec-summary>
</transition>

<transition name="fade"  mode="in-out">

  <lec-apply v-if="isLoading" v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">
  </lec-apply>
</transition>
<transition name="fade"  mode="in-out">

  <lec-class-nav  v-if="isLoading" v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">
  </lec-class-nav>
</transition>

  <transition name="fade"  mode="in-out">

  <lec-speaking  v-if="isLoading" v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">

  </lec-speaking >
</transition>

  <transition name="fade"  mode="in-out">

  <lec-intro  v-if="isLoading" v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">

  </lec-intro>
</transition>


  <lec-location  v-if="isLoading" v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">

  </lec-location>


  <lec-curriculum v-if="isLoading" v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">

  </lec-curriculum>


  <lec-review v-if="isLoading" v-for="item in reviewArrayTrick" :key="id" @reflesh = "reviewload" :detailReview ="detailReview" :detailAll = "detailAll">

  </lec-review>


  <lec-qna  v-if="isLoading" v-for="item in qnaArrayTrick" :key="id" :detailQuestion = "detailQuestion" @reflesh = "questionload">

  </lec-qna>


  </div>

</template>

<script>
import LecSummary from './Lec_summary.vue'
import LecSpeaking from './Lec_speaking.vue'
import LecApply from './Lec_apply.vue'
import LecCurriculum from './Lec_curriculum.vue'
import LecIntro from './Lec_intro.vue'
import LecLocation from './Lec_location.vue'
import LecQna from './Lec_qna.vue'
import LecReview from './Lec_review.vue'
import LecClassNav from './Lec_class-nav.vue'
import Loading from './Loading.vue'



import {bus} from '../bus'

export default {
  data(){
    return {
      id: this.$route.params.lecid,
      detailAll: [],
      detailReview: [],
      detailQuestion: [],

      // 데이터 뿌리는 순서를 위한  Trick
      detailAllArrayTrick: [],
      reviewArrayTrick: [],
      qnaArrayTrick: []
    }
  },
  watch: {

  },
  // props: ['classlist'],
  created(){
      // 1. detailAll 데이터 get
      this.$http.get(`talent/detail-all/${this.$route.params.lecid}/`)
      .then(function(response){
        console.log("detailAll-response:",response)
        return response.json()
      })
      .then(function(data){
        console.log("detailAll-data:",data)
        this.detailAll = data,
        //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.detailAllArrayTrick = [1]
      })


      // 2. talent Review
      this.reviewload()

      // 3. talent Questions
      this.questionload()
  },
  beforeDestroy(){
    this.$store.commit("pageChangeReview", 1)
    this.$store.commit("pageChange", 1)



  },
  computed: {
    isLoading(){
      if (this.detailAllArrayTrick[0] === 1 && this.reviewArrayTrick[0] === 1 && this.qnaArrayTrick[0] === 1){
        return true
      }

    },
  },


  methods: {
    questionload(){
      this.$http.get(`talent/detail/${this.$route.params.lecid}/qna/`
        ,{ params: {page_size: this.$store.state.page.question.requestCountPerPage, page: this.$store.state.page.question.page}} )
    .then(function(response){
      console.log("response-question:",response)
      return response.json()
    })
    .then(function(data){
      this.detailQuestion= data
      console.log("question-data:",data)

      //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      this.qnaArrayTrick = [1]
    })
  },
    reviewload(){
      this.$http.get(`talent/detail/${this.$route.params.lecid}/review/`,{ params: {page_size: this.$store.state.page.review.requestCountPerPage, page: this.$store.state.page.review.page}} )
      .then(function(response){
        console.log("response-review:",response)

        return response.json()
      })
      .then(function(data){
        this.detailReview = data

        //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.reviewArrayTrick = [1]
      })

      this.$http.get(`talent/detail-all/${this.$route.params.lecid}/`)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        this.detailAll = data,

        //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.detailAllArrayTrick = [1]
      })

    }
  },

  components: {
    LecSummary,
    LecSpeaking,
    LecApply,
    LecCurriculum,
    LecIntro,
    LecLocation,
    LecQna,
    LecReview,
    LecClassNav,
    Loading,
  },


}
</script>

  <style lang="sass">
    .lec-wrap
      min-height: 100vh
    [v-cloak]
      display: none


    .fade-enter-active, .fade-leave-active
      transition: opacity 2s

    .fade-enter, .fade-leave-to
      opacity: 0


    // @import "../sass/total"
    // @import "../sass/lec-index"
  </style>
