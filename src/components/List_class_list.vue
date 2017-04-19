<template lang="html">
    <div>
      <!-- <router-link tag="li" v-for = "item in classlist" class="list_" v-bind:style="{ transform: 'translate(' + trans + '%)' }" class="list_class" :to="`lec/${item.pk}`" :classitem="item">
        {{item.title}}
      </router-link> -->

          <!-- class -->
          <section class="list_class-list row">
            <!-- <p class="list_class-list__subteitle ">당신이 배우고 싶은것, 무엇이든 Gori</p> -->

            <!-- <div class="list_class-list__heading_wrapper">
              <p v-if="titleFilter" class=" "> {{ titleFilter}}</p>
              <p v-if="categoryFilter" class=" "> {{ categoryFilter }} </p>
              <p v-if="regionFilter" class=" "> {{ regionFilter }}</p>
            </div> -->

            <!-- ::before 선택자로 '+' 기호 추가 요망 -->
            <!-- Carousel -->
            <div class="list_class-list__carousel" id="carousel-class" >

              <ul class="list_class-list__carousel__list row">

                <!-- is_new class -->
                <!-- <router-link tag="li" to="/lec" class="list_navi_menu navi_menu_service " v-for = "classlist in classlist" class="list_" v-bind:style="{ transform: 'translate(' + test + '%)' }"> -->
                <!-- <li v-for = "classlist in classlist" class="list_" v-bind:style="{ transform: 'translate(' + test + '%)' }"> -->
                    <router-link tag="li" v-for = "(item, index) in searchedList" v-bind:style="{ transform: 'translate(' + trans + '%)' }" class="class-list__item" :to="{ name: 'lec', params: { lecid: item.pk }}" :key="item.id" >
                    <div class="list_is_new">new</div>
                    <!-- <button type="button" class="list_class__wish is_wish"><i class="list_icon-heart"></i></button> -->
                    <img :src="item.tutor.profile_image" :alt="`${item.tutor.nickname}`" class="list_class__tutor-picture">
                    <p class="list_class__tutor-name">{{item.tutor.name}}</p>
                    <div class="list_class__star-total">
                      <div v-if = "item.average_rate >= 5" class="list_star-1st"><i class="icon-star"></i></div>
                      <div v-if = "item.average_rate >= 4"><i class="icon-star"></i></div>
                      <div v-if = "item.average_rate >= 3"><i class="icon-star"></i></div>
                      <div v-if = "item.average_rate >= 2"><i class="icon-star"></i></div>
                      <div v-if = "item.average_rate >= 1"><i class="icon-star"></i></div>
                      <p class="list_start-total-num"> ({{item.review_count}})</p>
                    </div>
                    <h2 class="list_class__intro__title">{{item.title}}</h2>
                    <dl class="list_class__intro">
                      <dd class="list_class__intro__group">{{item.type}}</dd>
                      <dd class="list_class__intro__review-num">{{item.regions[0] ? item.regions[0] : "대한민국"}}</dd>
                      <dd class="list_class__intro__location">{{item.number_of_class}} 회</dd>
                      <dd class="list_class__intro__times">{{item.hours_per_class}} 시간</dd>
                    </dl>
                </router-link>
              <!-- </li> -->

              </ul>
            </div>
            <!-- Carousel left button-->
            <button class="list_class-list__carousel__left " type="button" ><i class="icon-left-open-big" @click="moveLeft"></i></button>
            <button class="list_class-list__carousel__more" type="button" >더보기</button>
            <!-- Carousel right button-->
            <button class="list_class-list__carousel__right " type="button"><i class="icon-right-open-big" @click="moveRight"></i></button>
            <!-- carousel 끝! -->
          </section>




    </div>
</template>

<script>

export default {
  data: function() {
    return{
      WindowWidth: window.innerWidth,
      trans: 0,
    }
  },
  created(){
    console.log('searchedList:',this.searchedList)
  },
  watch:{

  },
  props: ['searchedList'],
  methods: {
    moveRight(){
      if (this.trans >= this.classLength) {
        this.trans = this.trans - 102;
        console.log("this.trans:",this.trans)
        console.log("this.classLength():",this.classLength)
       }
    // console.log(this.classLists.length)
    },
    moveLeft(){
      if (this.trans < 0) {
        this.trans = this.trans + 102;
        console.log("this.trans:",this.trans)
      }
    },
    windowResize(e){
      this.windowWidth = e.currentTarget.innerWidth;
      console.log("windowWidth:",this.windowWidth)
      if (this.windowWidth > 960){
      document.querySelector(".list_class-list__carousel").scrollLeft = 0
      }
      if (this.windowWidth < 959){
        this.trans = 0;
      }
    },
    },

  computed: {
    // categoryFilter(){
    //   if (this.$route.query.category){
    //     switch(this.$route.query.category){
    //       case "hnb" : return "헬스/뷰티"
    //       break;
    //       case "com" : return "컴퓨터"
    //       break;
    //       case "etc" : return "기타"
    //       break;
    //       case "art" : return "미술/음악"
    //       break;
    //       case "lan" : return "외국어"
    //       break;
    //       case "spo" : return "스포츠"
    //       break;
    //       case "job" : return "전공/취업"
    //       break;
    //       case "hob" : return "이색취미"
    //       break;
    //       }
    //     }
    //   },
    //   regionFilter(){
    //     if (this.$route.query.region){
    //       switch(this.$route.query.region){
    //         case "kou" : return "고려대"
    //         break;
    //         case "snu" : return "서울대"
    //         break;
    //         case "you" : return "연세대"
    //         break;
    //         case "hou" : return "홍익대"
    //         break;
    //         case "ewwu" : return "이화여대"
    //         break;
    //         case "bsu" : return "부산대"
    //         break;
    //         case "jau" : return "중앙대"
    //         break;
    //         case "ggu" : return "건국대"
    //         break;
    //         case "hyu" : return "한양대"
    //         break;
    //         case "kn" : return "강남"
    //         break;
    //         case "sc" : return "신촌"
    //         break;
    //         case "sd" : return "사당"
    //         break;
    //         case "js" : return "잠실"
    //         break;
    //         case "jr" : return "종로"
    //         break;
    //         case "hh" : return "혜화"
    //         break;
    //         case "ys" : return "용산"
    //         break;
    //         case "hj" : return "합정"
    //         break;
    //         case "md" : return "목동"
    //         break;
    //         case "etc" : return "기타"
    //         break;
    //
    //       }
    //     }
    //   },
    //   titleFilter(){
    //     if (this.$route.query.title){
    //       return this.$route.query.title
    //     }
    //   },

    classLength(){
        return (-102 * (this.classlist.length - 5) )
    }
  },
  mounted() {
    window.addEventListener('resize', this.windowResize);
  },
  beforeDestroy: function () {
   window.removeEventListener('resize', this.windowResize)
 },


}
</script>

<style lang="sass">
  .list_class-list__carousel__list>li
    // transition: 0.8s all
    cursor: pointer
</style>
