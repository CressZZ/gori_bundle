<template lang="html">
  <div class="enroll-wish-all">

        <section>
            <h2 class="enroll-myinfo__heading">나의 위시리스트</h2>

            <div class="list_class-wishlist-wrap" >

              <ul class="list_class-wishlist">

                  <router-link tag="li" v-for = "(item, index) in wishList"  class="class-wishlist__item" :to="{ name: 'lec', params: { lecid: item.pk }}" :key="item" >

                  <p class="list_class__wish-name">{{item.title}}</p>


              </router-link>

            <!-- </li> -->

          </ul>
            <!-- </ul> -->
          </div>

        </section>



  </div>
</template>

<script>
import {bus} from '../bus'

export default {
data: function() {
  return{
    id: this.$route.params.lecid,
    // wishList:[]


  }
},
computed:{
  wishList(){
    return this.$store.state.login.wishlist.results
  }
},
created(){
  // this.$http.get('member/wish-list/', {
  // headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
  // })
  // .then(function(response){
  //   console.log("dsdfdsfsdfd",response);
  //   return response.json()
  // })
  // .then(function(data){
  //   this.wishList = data.results
  //   console.log("sdfsfsdfs",this.wishList);
  // })
  // console.log('searchedList:',this.searchedList)
},



methods: {

}
}
</script>

<style lang="sass">

</style>
