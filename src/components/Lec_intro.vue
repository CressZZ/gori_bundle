<template lang="html">
  <!-- hr은 일단 삭제 해 보았습니다.  -->
  <!-- intro -->
  <section class="intro" id="intro">
    <div class="row">
      <div class="intro__wrap col-4-4 col-7-12">
        <h2 class="intro__heading" >수업소개</h2>
        <div class="intro__img-container">
          <img :src="`${detailAll.cover_image}`" :alt="`${detailAll.title}`" v-cloak>
        </div>
        <p class="intro__description" v-html="whiteSpace(detailAll.class_info)" v-cloak></p>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  props: ["detailAll"],
  created(){
  },
  computed:{
  },
  methods:{
    whiteSpace(text){
      return text.replace(/\r\n/gi,"<br>")
    }

  }
//
}
</script>

  <style lang="sass">
    [v-cloak]
      display: none
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_intro"
  </style>
