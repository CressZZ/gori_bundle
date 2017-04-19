<template lang="html" >
  <!-- class_nav -->
  <section
  class="class_nav" :class ="{isFixed: isFixed}" :style="{height: navHeight + 'px'}" >
    <nav class="class_nav__wrapper" style="z-index: 99" >
      <ul>
        <li class="right-border">
          <a href="" @click.prevent="scrollToIntro">수업소개</a></li>
        <li>
          <a href="" @click.prevent="scrollToReview">리뷰보기</a>
        </li>
        <li class="left-border">
          <a href="" @click.prevent="scrollToQna" >문의하기</a>
        </li>
      </ul>
    </nav>
  </section>
</template>



<script>
// import $ from 'jquery'
//
export default {

  data() {
    return{
      isFixed: false,
      navHeight: null,
      isoffs: true,
      WindowWidth: null,
      currentPage: "pc"
    }
  },
  methods: {
    windowResize(e){
      this.windowWidth = e.currentTarget.innerWidth;
      if (this.windowWidth > 690){
        this.isFixed= false,
        this.currentPage = "pc"
      } else if (this.windowWidth < 689){
        if(this.currentPage === "pc"){
          this.currentPage = "mobile"
          var windowScrollTop = window.pageYOffset
          if( windowScrollTop > this.NavTop ) {
            this.isFixed= true
          }
        }
      }
    },
    navPosition(){
      var windowScrollTop = window.pageYOffset
      this.NavTop = document.querySelector('.class_nav').offsetTop
      console.log("NavTop",this.NavTop)
       if (this.currentPage === "mobile"){
        if( windowScrollTop > this.NavTop ) {
          this.isFixed = true
        }
        else{
          this.isFixed = false
        }
      }
      else {
        this.isFixed = false
      }
    },
    scrollToIntro(){
      this.introTop = document.querySelector('#intro').offsetTop
      // console.log("introTop:", this.introTop)
      window.scrollTo(0, this.introTop - 84)
    },
    scrollToReview(){
      this.reviewTop = document.querySelector('#review').offsetTop
      window.scrollTo(0, this.reviewTop - 84)
    },
    scrollToQna(){
      this.qnaTop = document.querySelector('#qna').offsetTop
      window.scrollTo(0, this.qnaTop - 84)
    },

  },

  mounted(){
    this.navHeight = document.querySelector('.class_nav__wrapper>ul').getBoundingClientRect().height
    console.log('navHeight:',this.navHeight);
    this.windowWidth = window.innerWidth
    console.log("windowWidth:",this.windowWidth)

    if (this.windowWidth > 690){
      this.currentPage = "pc"
      console.log("this.currentPage:",this.currentPage);
      // this.isoffs = false
    } else if (this.windowWidth < 689) {
      this.currentPage = "mobile"
      console.log("this.currentPage:",this.currentPage)
      // this.isoffs = true
    }
    window.addEventListener('resize', this.windowResize);
    window.addEventListener('scroll', this.navPosition);
  },
  destroyed() {
   window.removeEventListener('resize', this.windowResize)
   window.removeEventListener('scroll', this.navPosition);

  },
  computed: {

  },
}

</script>

  <style lang="sass">
    .isFixed
      // height: 0 !important
      .class_nav__wrapper
        position: fixed
        top: 0

    // .class_nav
      // height:
      // transition: 0.7s all
  </style>
