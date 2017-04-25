<template lang="html">
    <div>
      <!-- <router-link tag="li" v-for = "item in classlist" class="" v-bind:style="{ transform: 'translate(' + trans + '%)' }" class="class" :to="`lec/${item.pk}`" :classitem="item">
        {{item.title}}
      </router-link> -->

          <!-- class -->
          <section class="class-list row">
            <div class="class-list__heading_wrapper">
              <h2 class="class-list__heading ">POPULAR CLASS</h2>
              <p class="class-list__subtitle ">당신이 배우고 싶은것, 무엇이든 Gori</p>

            </div>

            <div class="class-list__carousel" id="carousel-class" >

              <ul class="class-list__carousel__list row">

                  <router-link tag="li" v-for = "(item, index) in classlist" v-bind:style="{ transform: 'translate(' + trans + '%)' }" class="class-list__carousel__list__item" :to="{ name: 'lec', params: { lecid: item.pk }}" :key="item.id" >

                    <div class="class-list__carousel__list__item__wrap">

                      <div class="is_new">new</div>
                      <img :src="item.tutor.profile_image" :alt="item.tutor.nickname" class="class__tutor-picture">
                      <p class="class__tutor-name">{{item.tutor.name}}</p>
                      <div class="class__star-total">
                        <div v-if = "item.average_rate >= 5" class="star-1st"><i class="icon-star"></i></div>
                        <div v-if = "item.average_rate >= 4"><i class="icon-star"></i></div>
                        <div v-if = "item.average_rate >= 3"><i class="icon-star"></i></div>
                        <div v-if = "item.average_rate >= 2"><i class="icon-star"></i></div>
                        <div v-if = "item.average_rate >= 1"><i class="icon-star"></i></div>
                        <p class="start-total-num"> ({{item.review_count}})</p>
                      </div>
                      <h2 class="class__intro__title">{{item.title}}</h2>
                      <dl class="class__intro">
                        <dd class="class__intro__group">{{item.type}}</dd>
                        <dd class="class__intro__review-num">{{item.regions[0] ? item.regions[0] : "대한민국"}}</dd>
                        <dd class="class__intro__location">{{item.number_of_class}} 회</dd>
                        <dd class="class__intro__times">{{item.hours_per_class}} 시간</dd>
                      </dl>

                    </div>

                </router-link>
              <!-- </li> -->

              </ul>
            </div>
            <!-- Carousel left button-->
            <button class="class-list__carousel__left " type="button" ><i class="icon-left-open-big" @click="moveLeft"></i></button>
            <router-link tag="button" :to = "{ name: 'list'}" class="class-list__carousel__more">더보기</router-link>
            <!-- <button class="class-list__carousel__more" type="button" @click = "goSearch">더보기</button> -->
            <!-- Carousel right button-->
            <button class="class-list__carousel__right " type="button"><i class="icon-right-open-big" @click="moveRight"></i></button>
            <!-- carousel 끝! -->
          </section>




    </div>
</template>

<script>

export default {
  data: function() {
    return{
      windowWidth: window.innerWidth,
      trans: 0,
      currentSize: null
    }
  },
  created(){
    console.log('this.classlist.length:',this.classlist.length)
  },
  watch:{
    currentSize(){
      document.querySelector(".class-list__carousel").scrollLeft = 0
      this.trans = 0;
      console.log("size Change>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      console.log("this.trans:",this.trans)
    }
  },
  props:['classlist'],
  methods: {
    // goSearch(){
    //   this.$emit("goSearch")
    // }
    moveRight(){
      if (this.trans >= this.classLength) {
        this.trans = this.trans - 100;
       }
    // console.log(this.classLists.length)
    },
    moveLeft(){
      if (this.trans < 0) {
        this.trans = this.trans + 100;
      }
    },
    windowResize(e){
      this.windowWidth = e.currentTarget.innerWidth;
      console.log("currentSize:",this.currentSize)
      if (this.windowWidth > 689){
      document.querySelector(".class-list__carousel").scrollLeft = 0
      }
      if (this.windowWidth < 689){
      this.currentSize = 689;
      }
      if (this.windowWidth >= 690 && this.windowWidth < 899){
      this.currentSize = 690;
      }
      if (this.windowWidth >= 900 && this.windowWidth < 1199){
      this.currentSize = 900;
      }
      if (this.windowWidth >= 1200 && this.windowWidth < 1399){
      this.currentSize = 1200;
      }
      if (this.windowWidth >= 1400){
      this.currentSize = 1400;
      }
      if (this.windowWidth < 690){
        this.trans = 0;
      }


    }
    },

  computed: {
    // WindowWidth(){
    //   return window.innerWidth
    // },
    classLength(){
      if (this.windowWidth >= 690 && this.windowWidth < 900){
        return (-100 * (this.classlist.length - 3) )
      }  else if (this.windowWidth >= 900 && this.windowWidth < 1199){
        return (-100 * (this.classlist.length - 4) )
      }  else if (this.windowWidth >= 1200 && this.windowWidth < 1399){
        return (-100 * (this.classlist.length - 5) )
      } else if (this.windowWidth >= 1400){
        return (-100 * (this.classlist.length - 6) )
      }
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
  .class-list__carousel__list>li
    transition: 0.8s all
    cursor: pointer
  .class-list__carousel__list__item
    // min-height: 313px
  .class__tutor-name
    min-height: 38px
</style>
