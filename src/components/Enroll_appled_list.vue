<template lang="html">
  <div class="enroll-wish-all">

        <section >
            <h2 class="enroll-myinfo__heading">신청한 수업</h2>

          <div class="list_class-wishlist-wrap" >

              <ul class="list_class-wishlist">

                  <router-link tag="li" v-for = "(item, index) in appledList"  class="class-wishlist__item" :to="{ name: 'lec', params: { lecid: item.talent.pk }}" :key="item" >

                  <p class="list_class__wish-name">{{item.talent.title}}</p>
                </li>

              </router-link>

            <!-- </li> -->

          </ul>
            <!-- </ul> -->
          </div>

        </section>



  </div>
</template>

<script>
// import {bus} from '../bus'

export default {
data: function() {
  return{
    id: this.$route.params.lecid,
    // appledList: this.$store.state.login.registration.results


  }
},
computed:{
  appledList(){
    return this.$store.state.login.registration.results
  }
},
created(){
  // this.$http.get('member/registrations/', {
  // headers: {Authorization: `Token ${sessionStorage.getItem("Token")}`}
  // })
  // .then(function(response){
  //   console.log("dsdfdsfsdfd",response);
  //   return response.json()
  // })
  // .then(function(data){
  //   this.appledList = data.results
  //   console.log("sdfsfsdfs",this.appledList);
  // })
  // console.log('searchedList:',this.searchedList)
},



methods: {

}
}
</script>

<style lang="sass">

</style>
