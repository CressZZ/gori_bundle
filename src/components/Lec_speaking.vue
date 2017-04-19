<template lang="html">
  <!-- speaking -->
  <section class="speaking">
    <h2 class="hidden__heading">튜터소개</h2>
    <div class="speaking__wrapper">

      <div class="row">
        <p class="speaking__descrip"></p>
        <img :src="`${detailAll.tutor.profile_image}`" :alt="`${detailAll.tutor.nickname}`" class="speaking__tutor-picture  col-1-4">
        <p class="speaking__descrip col-3-4 col-6-12">{{detailAll.tutor_info ? detailAll.tutor_info : ""}}</p>

        <!-- <strong class="speaking__tutor-speaking col-3-4 push-2-4 col-5-12 col-6-12 push-1-12"> "{{detailAll.tutor_info ? detailAll.tutor_info : ""}}"</strong> -->
      </div>

      </div>
      <!-- <p class="speaking__descrip col-4-4 col-7-12">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p> -->

  </section>
</template>

<script>
export default {
  props: ["detailAll"],

}
</script>

  <style lang="sass">
    // .speaking
    //   transition: all 1s
  </style>
