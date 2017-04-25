<template>
    <div class="list-wrap">
      <list-search  @refreshList="refreshList" ></list-search>
    <transition name="fade"  mode="in-out">
        <Loading  v-if="!isLoading">
        </Loading>
    </transition>

    <transition  name="fade"  mode="in-out">
      <list-class-list v-if="isLoading" @readMore="readMore" :searchedList ="searchedList"></list-class-list>
  </transition>

    </div>
</template>

<script>

import ListSearch from './List_search.vue'
import ListClassList from './List_class_list.vue'
import Loading from './Loading.vue'





export default {
  // props: ['classlist'],


  data(){
    return {
      searchedList: [],
      detailAllArrayTrick: [],
      listpagenum: 1
    }
  },
  // props: ['classlist'],
  components: {
    ListSearch,
    ListClassList,
    Loading,

  },
  created(){
      this.refreshList()
      console.log("list create");
      // 1. detailAll 데이터 get
  },
  computed: {
    isLoading(){
      if (this.detailAllArrayTrick[0] === 1 ){
        console.log("loading end")
        return true
      }

    },
  },
  methods: {
    searchList(){
      this.searchedList = []
      this.refreshList()
    },
    refreshList(){
      this.listpagenum = 1
      this.$http.get(`talent/list/`,{ params: {category: this.$route.query.category, region: this.$route.query.region, title: this.$route.query.title, page_size: 8, page: this.listpagenum}} )

      .then(function(response){
        console.log("response-list:",response)
        return response.json()
      })
      .then(function(data){
        this.searchedList = data.results,
        console.log("data.results:",data.results)
        console.log("searchedList:",this.searchedList)


        //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.detailAllArrayTrick = [1]
      })
    },
    addList(){
      this.$http.get(`talent/list/`,{ params: {category: this.$route.query.category, region: this.$route.query.region, title: this.$route.query.title, page_size: 8, page: this.listpagenum}} )

      .then(function(response){
        console.log("response-list:",response)
        return response.json()
      })
      .then(function(data){
        this.searchedList = this.searchedList.concat(data.results),
        console.log("data.results:",data.results)
        console.log("searchedList:",this.searchedList)


        //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.detailAllArrayTrick = [1]
      })
    },
    readMore(){
      // console.log("hahahah")
      this.listpagenum = this.listpagenum + 1
      this.addList()
    }
  }

}
</script>

<style lang="sass">
  .list-wrap
    min-height: 90vh
  .fade-enter-active, .fade-leave-active
    transition: opacity 1s

  .fade-enter, .fade-leave-to
    opacity: 0

  // @import "../sass/total"
  // @import "../sass/main-index"
</style>
