<template lang="html">
  <!-- summery -->
  <section class="summery">

      <h2 class="hidden__heading">수업 안내</h2>
      <div class="summery__wrapper">
      <div class="row">
        <div class="summery__review col-2-4">
          <!-- 1.class__stars, 2.summery__stars -->
          <div class="summery__review__stars">
            <div v-if = "detailAll.average_rates.total >= 5" class="star-1st"><i class="icon-star"></i></div>
            <div v-if = "detailAll.average_rates.total >= 4" class="star-2nd"><i class="icon-star"></i></div>
            <div v-if = "detailAll.average_rates.total >= 3" class="star-3rd"><i class="icon-star"></i></div>
            <div v-if = "detailAll.average_rates.total >= 2" class="star-4th"><i class="icon-star"></i></div>
            <div v-if = "detailAll.average_rates.total >= 1" class="star-5th"><i class="icon-star"></i></div>
          </div>
          <div class="row"><span class="into__review__num" v-cloak>후기 {{detailAll.review_count}}건</span></div>
        </div>
      </div>
      <h3 class="summery__class-title" v-cloak>{{detailAll.title}}</h3>
      <div class="summery__gen-info">
        <span class="summery__gen-info__group" v-cloak>{{detailAll.type}}</span>

        <!-- <!!>배열 문제!!!!!</!!> -->
        <span class="summery__gen-info__location-detail" v-cloak>
          {{detailAll.locations[0] ? detailAll.locations[0].region : ""}}
           {{detailAll.locations[1] ? "/" + detailAll.locations[1].region : ""}}
           <!-- <template v-for="(location, index) in detailAll.locations">
           {{ ArrayTrick(location, index) }}
           </template> -->

         </span>



        <span class="summery__gen-info__times" v-cloak>{{detailAll.number_of_class}} 회</span>
        <span class="summery__gen-info__time" v-cloak>{{detailAll.hours_per_class}} 시간/회</span>
      </div>
      <div class="summery__price-info">
        <span class="summery__price-info__total" v-cloak><i class="icon-won"></i>{{
          String(detailAll.price_per_hour).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "
      }}원/회,</span>
        <span class="summery__price-info__each" v-cloak>총 {{String(detailAll.hours_per_class * detailAll.number_of_class * detailAll.price_per_hour).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ " "}}원</span>
      </div>
      <div class="summery__img_wrapper" v-cloak>
        <img :src="detailAll.cover_image" :alt="detailAll.tutor.nickname" class="summery__img">
      </div>
    </div>


  </section>

</template>

<script>
export default {
  data(){
    return{
      detailItem:[],
    }

  },
  props: ["detailAll"],

  watch:{
    '$route' (to, from){
      this.id = to.params.lecid
    },
    detailAll: function(){
        this.detailItem = this.detailAll
      }

  },
  created(){
    // this.fetch()
  },
  mounted(){

  },
  beforeUpdate(){
  },
  mounted(){
  },
  methods: {
    // fetch(){
    //   this.$http.get(`https://mozzi.co.kr/api/talent/detail/${this.$route.params.lecid}/location/`)
    //   .then(function(response){
    //     return response.json()
    //   })
    //   .then(function(data){
    //     this.classlist = data
    //   })
    // }


    // 오류가 발생하지 않도록 배열을 돌리기 위해 만든 메서드
    ArrayTrick(location, index ) {
      return location && (index===0) ?
        location.region :
        "";
    }
  },
}
</script>

  <style lang="sass">
    [v-cloak]
      display: none
  </style>
