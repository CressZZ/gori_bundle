<template lang="html">
  <!-- curriculum -->
  <section class="curriculum">

      <h2 class="curriculum__heading">커리큘럼</h2>
      <ul class="curriculum__list">
        <li class="row" v-for = "(item, index) in detailAll.curriculums">
          <strong class="curriculum__time">{{index + 1}}<span>회차</span></strong></br>
          <div class="curriculum__img-wrapper" v-if = "item.image">
            <img  :src="`${item.image}`" :alt="`${item.information}`" v-cloak class="curriculum__img">
          </div>
          <div class="curriculum__p-wrapper row">

            <span class="col-7-12 col-4-4 curriculum__time-des" v-html="whiteSpace(item.information)">
            </span>
          </div>


        </li>

      </ul>
    </section>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props: ["detailAll"],
  created(){

  },
  methods:{
    whiteSpace(text){
      return text.replace(/\r\n/gi,"<br>")
    }
  },

}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_curriculum"
  </style>
