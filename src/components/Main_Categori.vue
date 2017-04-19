<template>
  <div>
     <!-- Categori -->
    <section class="categori">
      <h2 class="hidden__heading">CATEGORI</h2>
      <!-- categori list 하나 삭제. 어학? -->
      <!-- 반응형 이미지를 구현하기 위해 img를 div에 한번 더 넣음. 괜히 복잡해보이므로 수정 가능하다면 수정 추천 -->
      <div class="categori__section-1">

        <!-- <a href="#">
            <img src="../media/img/categori/health.jpg" class="categori__list-1-2">
            <h3 class="categori__subtitle image-title">HEALTH</h3>
        </a> -->
        <!-- <router-link tag = "a" :to="{ name: 'list', params: { listid: 'hnb' }}"> -->

        <router-link tag = "a" :to="{ name: 'list', query: {category: 'hnb'}}">
          <img src="../media/img/categori/health.jpg" class="categori__list-1-2">
          <h3 class="categori__subtitle image-title">HEALTH</h3>
        </router-link>

        <!-- <a href="#">
            <img src="../media/img/categori/music.jpg" class="categori__list-1-2">
            <h3 class="categori__subtitle image-title">MUSIC&#38;ART</h3>
        </a> -->

        <router-link tag = "a" :to="{ name: 'list', query: { category: 'art' }}">
          <img src="../media/img/categori/music.jpg" class="categori__list-1-2">
          <h3 class="categori__subtitle image-title">MUSIC</h3>
        </router-link>

      </div>

      <div class="categori__section-2">

        <!-- <a href="#" >
          <img src="../media/img/categori/dance.jpg" class="categori__list-1-2">
          <h3 class="categori__subtitle categori__subtitle-m">DANCE</h3>
        </a> -->

        <router-link tag = "a" :to="{ name: 'list', query: { category: 'etc' }}">
          <img src="../media/img/categori/dance.jpg" class="categori__list-1-2">
          <h3 class="categori__subtitle image-title">ETC</h3>
        </router-link>

      </div>

      <div class="categori__section-3">

        <!-- <a href="#">
          <img src="../media/img/categori/computer.jpg" class="categori__list-1-2">
          <h3 class="categori__subtitle">COMPUTER</h3>
        </a> -->

        <router-link tag = "a" :to="{ name: 'list', query: { category: 'com' }}">
          <img src="../media/img/categori/computer.jpg" class="categori__list-1-2">
          <h3 class="categori__subtitle image-title">COMPUTER</h3>
        </router-link>
        <!--
        <a href="#">
          <img src="../media/img/categori/study2.jpg" class="categori__list-1-2">
          <h3 class="categori__subtitle">LANGUGE</h3>
        </a> -->

        <router-link tag = "a" :to="{ name: 'list', query: { category: 'lan' }}">
          <img src="../media/img/categori/study2.jpg" width=""class="categori__list-1-2">
          <h3 class="categori__subtitle image-title">LANGUAGE</h3>
        </router-link>

      </div>
    </section>
  </div>
</template>

<script>

export default {
  methods: {
  },
}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/main_categori"
  // @import "../sass/main_carousel"

</style>
