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

              <!-- <ul class="list_class-list__carousel__list row"> -->
                <transition-group  tag = "ul" name="list"  mode="out-in" class="list_class-list__carousel__list row">

                <!-- is_new class -->
                <!-- <router-link tag="li" to="/lec" class="list_navi_menu navi_menu_service " v-for = "classlist in classlist" class="list_" v-bind:style="{ transform: 'translate(' + test + '%)' }"> -->
                <!-- <li v-for = "classlist in classlist" class="list_" v-bind:style="{ transform: 'translate(' + test + '%)' }"> -->

                    <router-link tag="li" v-for = "(item, index) in searchedList"  class="class-list__item" :to="{ name: 'lec', params: { lecid: item.pk }}" :key="item" >
                    <div class="list_is_new">new</div>
                    <!-- <button type="button" class="list_class__wish is_wish"><i class="list_icon-heart"></i></button> -->
                    <div class="class-list__carousel__list__item__wrap">
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
                      </div>
                </router-link>

              <!-- </li> -->

            </transition-group>
              <!-- </ul> -->
            </div>
            <!-- Carousel left button-->
            <button class="list_class-list__carousel__left " type="button" ><i class="icon-left-open-big" ></i></button>
            <button class="list_class-list__carousel__more" type="button" @click = "readMore"> 더보기</button>
            <!-- Carousel right button-->
            <button class="list_class-list__carousel__right " type="button"><i class="icon-right-open-big" ></i></button>
            <!-- carousel 끝! -->
          </section>




    </div>
</template>

<script>

export default {
  data: function() {
    return{

    }
  },
  created(){
    console.log('searchedList:',this.searchedList)
  },
  watch:{

  },
  props: ['searchedList'],

  methods: {
    readMore(){
      console.log("click readmores")
      this.$emit("readMore")
    }
  }
}
</script>

<style lang="sass">
  .list_class-list
    transition: all 1s

  .list-enter-active
    transition: all 2s

  .list-enter
    opacity: 0
    // transform: translateY(30px)


  .list_class-list__carousel__list>li
    // transition: 0.8s all
    cursor: pointer
  .list_class__tutor-name
    min-height: 38px
</style>
