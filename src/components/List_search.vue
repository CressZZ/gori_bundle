<template lang="html">
  <div>

    <!-- Banner -->
    <section class="list">
        <div class ="list__search-banner">
          <h2 class="list__search-heading">강의검색</h2>

          <img src="src/media/img/categori/00.jpg"class="list__search-banner-img"></div>
        <div class="list__search__wrapper">
          <form @keydown.enter = "filtering" action="search" class="list__search">
            <input id="search-class" @keydown.enter.prevent = "filtering" v-model="filter.title" class="list__search__input" type="search" autofocus placeholder="검색어를 입력해 주세요~"><button @click = "filtering" class="list__search__btn" type="button">검색</button>
          </form>
        </div>
        <div class="list__search__filter">
          <div class="list__search__filter--category">
            <select @change = "filtering" v-model="filter.category" class="list__search__filter--category__dropdown" name="카테고리">
              <option value=""> 카테고리 전체</option>
              <option value="hnb"> 헬스/뷰티 </option>
              <option value="lan">외국어</option>
              <option value="com">컴퓨터</option>
              <option value="art">미술/음악</option>
              <option value="spo">스포츠</option>
              <option value="job">전공/취업</option>
              <option value="hob">이색취미</option>
              <option value="etc">기타</option>
            </select>
          </div>
          <div class="list__search__filter--region">
            <select @change = "filtering" v-model="filter.region" class="list__search__filter--region__dropdown" name="">
              <option value=""> 지역 전체</option>
              <option value="kou">고려대</option>
              <option value="snu">서울대</option>
              <option value="you">연세대</option>
              <option value="hou">홍익대</option>
              <option value="ewwu">이화여대</option>
              <option value="bsu">부산대</option>
              <option value="jau">중앙대</option>
              <option value="ggu">건국대</option>
              <option value="hyu">한양대</option>
              <option value="kn">강남</option>
              <option value="sc">신촌</option>
              <option value="sd">사당</option>
              <option value="js">잠실</option>
              <option value="jr">종로</option>
              <option value="hh">혜화</option>
              <option value="ys">용산</option>
              <option value="hj">합정</option>
              <option value="md">목동</option>
              <option value="etc">기타</option>

            </select>
          </div>


        </div>
        <div class="list_class-list__heading_wrapper">
          <p v-if="titleFilter" @click="titleFilterReset" class=" "> {{ titleFilter}}</p>
          <p v-if="categoryFilter" @click="categoryFilterReset" class=" "> {{ categoryFilter }} </p>
          <p v-if="regionFilter" @click="regionFilterReset" class=" "> {{ regionFilter }}</p>
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
        category: "",
        region: "",
        title: "",
      }
    }
  },
  created(){
    if (this.$route.query.category){
      this.filter.category = this.$route.query.category
    } else {
      this.filter.category = ""
    }
    if (this.$route.query.region){
      this.filter.region = this.$route.query.region
    } else{
      this.filter.region = ""
    }
    if (this.$route.query.title){
      this.filter.title = this.$route.query.title
    } this.filter.title = ""

    // document.querySelector('.list__search__filter--region__dropdown').value = this.$route.query.region
    // document.querySelector('.list__search__input').value = this.$route.query.title
  },
  methods: {
    categoryFilterReset(){
      this.filter.category = ""
      this.filtering()
    },
    regionFilterReset(){
      this.filter.region = ""
      this.filtering()
    },
    titleFilterReset(){
      this.filter.title = ""
      this.filtering()
    },

    filtering(){
        console.log("this.filter:",this.filter)
        this.$router.push({ name: 'list',  query: {category: this.filter.category, region: this.filter.region, title: this.filter.title}})
        this.$emit('refreshList')
        // this.$emit('searList')


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
},
computed:{
  categoryFilter(){
    // console.log("this.$router.params.listisd:", this.$route.params.listid)
    if (this.$route.query.category){
      switch(this.$route.query.category){
        case "hnb" : return "헬스/뷰티"
        break;
        case "com" : return "컴퓨터"
        break;
        case "etc" : return "기타"
        break;
        case "art" : return "미술/음악"
        break;
        case "lan" : return "외국어"
        break;
        case "spo" : return "스포츠"
        break;
        case "job" : return "전공/취업"
        break;
        case "hob" : return "이색취미"
        break;
        }
      }
    },
    regionFilter(){
      if (this.$route.query.region){
        switch(this.$route.query.region){
          case "kou" : return "강남"
          break;
          case "snu" : return "서울대"
          break;
          case "you" : return "연세대"
          break;
          case "hou" : return "홍익대"
          break;
          case "ewwu" : return "이화여대"
          break;
          case "bsu" : return "부산대"
          break;
          case "jau" : return "중앙대"
          break;
          case "ggu" : return "건국대"
          break;
          case "hyu" : return "한양대"
          break;
          case "kn" : return "강남"
          break;
          case "sc" : return "신촌"
          break;
          case "sd" : return "사당"
          break;
          case "js" : return "잠실"
          break;
          case "jr" : return "종로"
          break;
          case "hh" : return "혜화"
          break;
          case "ys" : return "용산"
          break;
          case "hj" : return "합정"
          break;
          case "md" : return "목동"
          break;
          case "etc" : return "기타"
          break;

        }
      }
    },
    titleFilter(){
      if (this.$route.query.title){
        return this.$route.query.title
      }
    },
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
