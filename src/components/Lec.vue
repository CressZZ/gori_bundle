<template lang="html">

  <div>
  <!-- <p>parameter ID {{id}}</p> -->
  <!-- <join>

  </join>

  <login :visible="visibles" @nonVisible = "nonVisible">

  </login> -->

  <lec-summary v-for="item in detailAllArrayTrick"  :key="id" :detailAll = "detailAll">

  </lec-summary>

  <lec-apply v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">
  </lec-apply>

  <lec-class-nav :detailAll = "detailAll">
  </lec-class-nav>


  <lec-speaking  v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">

  </lec-speaking :detailAll = "detailAll">

  <lec-intro :detailAll = "detailAll">

  </lec-intro>


  <lec-location v-for="item in detailAllArrayTrick" :key="id" :detailAll = "detailAll">

  </lec-location>


  <lec-curriculum :detailAll = "detailAll">

  </lec-curriculum>


  <lec-review v-for="item in reviewArrayTrick" :key="id" @reflesh = "reviewload" :detailReview ="detailReview" :detailAll = "detailAll">

  </lec-review>


  <lec-qna  v-for="item in qnaArrayTrick" :key="id" :detailQuestion = "detailQuestion" @reflesh = "questionload">

  </lec-qna>


  </div>

</template>

<script>
// import Join from './Join.vue'
// import Login from './Login.vue'

import LecSummary from './Lec_summary.vue'
import LecSpeaking from './Lec_speaking.vue'
import LecApply from './Lec_apply.vue'
import LecCurriculum from './Lec_curriculum.vue'
import LecIntro from './Lec_intro.vue'
import LecLocation from './Lec_location.vue'
import LecQna from './Lec_qna.vue'
import LecReview from './Lec_review.vue'
import LecClassNav from './Lec_class-nav.vue'
// import Rating from './Rating.vue'


import {bus} from '../bus'

export default {
  data(){
    return {
      id: this.$route.params.lecid,
      detailAll: [],
      detailReview: [],
      detailQuestion: [],

      // questionPage: 4,

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
        return response.json()
      })
      .then(function(data){
        this.detailAll = data,

        //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.detailAllArrayTrick = [1]
      })


      // 2. talent Review
      this.reviewload()

      // 3. talent Questions
      this.questionload()


      // 4. user-detail 데이터 get
      // this.$http.get('member/profile/user/', {
      // headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      // })
      // .then(function(response){
      //   console.log("user-detail-response:",response)
      //   return response.json()
      // })
      // .then(function(data){
      // })
      // .catch(function(err){
      //   console.log("err:",err.bodyText)
      // })

  },
  mounted(){
    // console.log("lec-vue lecid2:", this.id)
    // console.log("class-List2:", this.classlist)

  },

  updated(){
    // console.log("lec-vue lecid3:", this.id)
    // console.log("class-List3:", this.classlist)

  },
  beforeDestroy(){
    // console.log("lec-vue lecid4:", this.id)
    // console.log("class-List4:", this.classlist)

  },
  watch:{

  },

  methods: {
    questionload(){
      this.$http.get(`talent/detail/${this.$route.params.lecid}/qna/`)
        // ,{ params: {page_size: 2, page: this.questionPage}} )
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
      this.$http.get(`talent/detail/${this.$route.params.lecid}/review/`)
      .then(function(response){
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
  },


}
</script>

  <style lang="sass">
    [v-cloak]
      display: none

    // @import "../sass/total"
    // @import "../sass/lec-index"
  </style>
