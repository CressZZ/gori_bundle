<template lang="html">
  <div>

    <!-- Banner -->
    <section class="banner">
      <h2 class="hidden__heading">서비스 광고 영상 및 배너</h2>
      <!-- Carousel -->
      <div class="banner__carousel" id="carousel">
        <!-- Carousel list -->
        <ul class="banner__carousel__list">
            <li class="test" v-bind:style="{ transform: 'translate(' + trans + '%)' }">
              <div class="copy">
                <p class="copy__slogan">무엇이 당신을 빛나게 하나요?</p>
                <p class="copy__slogan__sub">배움으로 삶을 풍요롭게 해보세요!</p>
              </div>
              <video autoplay="" class="video_play" loop="" muted="" width="100%">
                <source src="src/media/video/sample.mp4" type="video/webm">
              </video>
            </li>
            <li class="" v-bind:style="{ transform: 'translate(' + trans + '%)' }">
              <img class="banner__carousel__list__item" src="../media/img/temp/cat.jpg" alt="홍보배너">
              <div class="copy">
                <p class="copy__slogan">재능을 연결해 드립니다!</p>
                <p class="copy__slogan__sub">다양한 사람, 이야기가 있는 곳</p>
              </div>
            </li>
            <li class=" " v-bind:style="{ transform: 'translate(' + trans + '%)' }">
              <img class="banner__carousel__list__item" src="../media/img/temp/temp.jpg" alt="소개">
            </li>
          </ul>
          <!-- Carousel nav ( ○○●○○ )  -->
          <ul class="banner__carousel__nav col-2-4 push-1-4">
            <li data-target="#carousel" data-slide-to="0" @click = "move1"><a href="#" class="carousel">{{target1}}</a></li>
            <li data-target="#carousel" data-slide-to="1"  @click = "move2"><a href="#" class="carousel active">{{target2}}</a></li>
            <li data-target="#carousel" data-slide-to="2"  @click = "move3"><a href="#" class="carousel">{{target3}}</a></li>
          </ul>
          <!-- Carousel buttons-->●◦
          <div class="banner__carousel__buttons ">
            <button class="banner__carousel__left " @click="moveLeft" type="button"><i class="icon-left-open-big"></i></button>
            <button class="banner__carousel__right " @click="moveRight" type="button"><i class="icon-right-open-big"></i></button>
          </div>
        </div>
        <!-- Banner-input -->
        <!--모바일에서는 검색란 뺄것-->

        <div class="banner__search__wrapper">
          <form @keydown.enter = "filtering" action="search" class="list__search">
            <input @keydown.enter.prevent = "filtering" v-model="filter.title" class="list__search__input" type="search" autofocus placeholder="바숙미 바보"><button @click = "filtering" class="list__search__btn" type="button">검색</button>
          </form>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      WindowWidth: window.innerWidth,
      target1: "●",
      target2: "◦",
      target3: "◦",
      trans: 0,
      filter:{

        title: "",
      }
    }
  },
  methods: {
    filtering(){
        console.log("this.filter:",this.filter)
        this.$router.push({ name: 'list',  query: {title: this.filter.title}})
        this.$emit('refreshList')
    },
    moveRight(){
      console.log("click")
      if (this.trans >= -100) {

        this.trans = this.trans - 100;
        if(this.trans === 0){
          this.target1 =  "●"
          this.target2 = "◦"
          this.target3 = "◦"
        } else if (this.trans === -100){
          this.target1 = "◦"
          this.target2 = "●"
          this.target3 = "◦"
        } else if (this.trans === -200){
          this.target1 = "◦"
          this.target2 = "◦"
          this.target3 = "●"
        }
      }
    },
    moveLeft(){
      if (this.trans < 0) {
        this.trans = this.trans + 100;
        if(this.trans === 0){
          this.target1 =  "●"
          this.target2 = "◦"
          this.target3 = "◦"
        } else if (this.trans === -100){
          this.target1 = "◦"
          this.target2 = "●"
          this.target3 = "◦"
        } else if (this.trans === -200){
          this.target1 = "◦"
          this.target2 = "◦"
          this.target3 = "●"
        }
      }
    },
    move1(){
      this.trans = 0;
      this.target1 =  "●"
      this.target2 = "◦"
      this.target3 = "◦"
    },
    move2(){
      this.trans = -100;
      this.target1 = "◦"
      this.target2 = "●"
      this.target3 = "◦"
    },
    move3(){
      this.trans = -200;
      this.target1 = "◦"
      this.target2 = "◦"
      this.target3 = "●"
    }
}

}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/main_carousel"
  .banner__carousel__list
    li
      transition: 1s all
</style>
