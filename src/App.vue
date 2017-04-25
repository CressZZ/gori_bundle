<template>
  <div id="app2"  :class="{ gridon: isgrid }"  @click.meta="gridToggle">
      <router-view name='join' ></router-view>
      <router-view name='login'></router-view>
      <router-view name="header" ></router-view>

      <router-view :classlist = "classlist"></router-view>
      <router-view name="footer"></router-view>

  </div>
</template>

<script>
import {bus} from './bus'
// import
export default {
  // name: 'app',
  data () {
    return {
      classlist: [],
      isgrid: false,
    }
  },
watch: {

},
computed:{
  stores(){
  }
},
created() {
  // console.log("$:",$().jquery)
  // 실행하자 마자 talent list를 GET!
  this.$http.get('talent/list/')
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    this.classlist = data.results
    return
  })
  .catch( error => console.error(error.message) );
},

mounted(){

  },
methods: {
  gridToggle(){
    console.log("gridToggle-on!!!")
    this.isgrid = !this.isgrid;
  }
},

}
</script>

<style lang="sass">
  @import "sass/index"
  // @import "fontello/css/fontello.css"



</style>
