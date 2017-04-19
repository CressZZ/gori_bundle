<template>
    <div>
      <list-search  @refreshList="refreshList" ></list-search>
      <list-class-list v-for="item in detailAllArrayTrick" :key="item.id" :searchedList ="searchedList"></list-class-list>
    </div>
</template>

<script>

import ListSearch from './List_search.vue'
import ListClassList from './List_class_list.vue'




export default {
  // props: ['classlist'],


  data(){
    return {
      searchedList: [],
      detailAllArrayTrick: [],
    }
  },
  // props: ['classlist'],
  components: {
    ListSearch,
    ListClassList,

  },
  created(){

      // 1. detailAll 데이터 get
      this.$http.get(`talent/list/`,{ params: {category: this.$route.query.category, region: this.$route.query.region, title: this.$route.query.title}} )

      .then(function(response){
        console.log("response-list:",response)
        return response.json()
      })
      .then(function(data){
        this.searchedList = data.results,
        console.log("data.results:",data.results)


        //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.detailAllArrayTrick = [1]
      })
  },
  methods: {
    refreshList(){
      this.$http.get(`talent/list/`,{ params: {category: this.$route.query.category, region: this.$route.query.region, title: this.$route.query.title}} )

      .then(function(response){
        console.log("response-list:",response)
        return response.json()
      })
      .then(function(data){
        this.searchedList = data.results,
        console.log("data.results:",data.results)


        //Array 해결을 위한 트릭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.detailAllArrayTrick = [1]
      })
    },
  }

}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/main-index"
</style>
