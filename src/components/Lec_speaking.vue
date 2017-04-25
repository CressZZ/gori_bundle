<template lang="html">
  <!-- speaking -->
  <section class="speaking">
    <h2 class="hidden__heading">튜터소개</h2>
    <div class="speaking__wrapper">

      <div class="row">
        <p class="speaking__descrip"></p>
        <img :src="`${detailAll.tutor.profile_image}`" :alt="`${detailAll.tutor.nickname}`" class="speaking__tutor-picture  col-1-4">
        <p class="speaking__descrip col-3-4 col-6-12" v-html="whiteSpace(tutor_info)"></p>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  props: ["detailAll"],
  methods: {
    whiteSpace(text){
      return text.replace(/\r\n/gi,"<br>")
    }
  },
  computed:{
    tutor_info(){
      return this.detailAll.tutor_info ? this.detailAll.tutor_info : ""
    }
  },

}
</script>

<style lang="sass">
</style>
