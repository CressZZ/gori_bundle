<template>
  <!-- location(map) -->
  <section class="location row">
    <h2 class="location__heading">위치</h2>
    <!-- <div class="col-7-12 col-4-4" id="map"></div> -->
    <gmap-map
      :class="['g-map', 'col-7-12', 'col-4-4']"
      :center="center"
      :zoom="13"
      :scrollwheel = "false"
    >
      <gmap-marker
        :position="markers[0].position"
        :clickable="true"
        :draggable="true"
        @click="center=markers[0].position"
      ></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAjUnvTeaPsjSyxabVD9CFTNbEbnS8mZ4o',
    // v: '버전 넘버(옵션)',
    // libraries: 'places', //// 사용자에게 플레이스 정보를 입력 받으려면...
  }
});

export default {

  data(){
    return {
      center: {lat: 37.53, lng: 126.9855},
      markers:[
        {
        position: {lat: 37.53, lng: 126.9855}
      },
    ]
    }
  },
  props: ["detailAll"],

  watch: {
    // detailAll: function() {
    //   var self = this;
    //   if(self.detailAll.locations[0]){
    //     switch(self.detailAll.locations[0].region){
    //       case "고려대" :
    //       self.markers[0].position.lat  = 37.591034;
    //       self.markers[0].position.lng = 127.027796;
    //       self.center.lat  = 37.591034;
    //       self.center.lng = 127.027796;
    //       break;
    //       case "서울대" :
    //       self.markers[0].position.lat  = 37.481272;
    //       self.markers[0].position.lng = 126.952717;
    //       self.center.lat  = 37.481272;
    //       self.center.lng = 126.952717;
    //       break;
    //       case "연세대" :
    //       self.markers[0].position.lat  = 37.565988;
    //       self.markers[0].position.lng = 126.938604;
    //       self.center.lat  = 37.565988;
    //       self.center.lng = 126.938604;
    //       break;
    //       case "홍익대" :
    //       self.markers[0].position.lat  = 37.558335;
    //       self.markers[0].position.lng = 126.925534;
    //       self.center.lat  = 37.558335;
    //       self.center.lng = 126.925534;
    //       break;
    //       case "이화여대" :
    //       self.markers[0].position.lat  = 37.562096;
    //       self.markers[0].position.lng = 126.946872;
    //       self.center.lat  = 37.562096;
    //       self.center.lng = 126.946872;
    //       break;
    //       case "부산대" :
    //       self.markers[0].position.lat  = 35.233914;
    //       self.markers[0].position.lng = 129.079764;
    //       self.center.lat  = 35.233914;
    //       self.center.lng = 129.079764;
    //       break;
    //       case "중앙대" :
    //       self.markers[0].position.lat  = 37.504368;
    //       self.markers[0].position.lng = 126.957018;
    //       self.center.lat  = 37.504368;
    //       self.center.lng = 126.957018;
    //       break;
    //       case "건국대" :
    //       self.markers[0].position.lat  = 37.541052;
    //       self.markers[0].position.lng = 127.079407;
    //       self.center.lat  = 37.541052;
    //       self.center.lng = 127.079407;
    //       break;
    //       case "한양대" :
    //       self.markers[0].position.lat  = 37.557445;
    //       self.markers[0].position.lng = 127.045300;
    //       self.center.lat  = 37.557445;
    //       self.center.lng = 127.045300;
    //       break;
    //       case "강남" :
    //       self.markers[0].position.lat  = 37.498470;
    //       self.markers[0].position.lng = 127.027610;
    //       self.center.lat  = 37.498470;
    //       self.center.lng = 127.027610;
    //       break;
    //       case "신촌" :
    //       self.markers[0].position.lat  = 37.560218;
    //       self.markers[0].position.lng = 126.942333;
    //       self.center.lat  = 37.560218;
    //       self.center.lng = 126.942333;
    //       break;
    //       case "사당" :
    //       self.markers[0].position.lat  = 37.476823;
    //       self.markers[0].position.lng = 126.981654;
    //       self.center.lat  = 37.476823;
    //       self.center.lng = 126.981654;
    //       break;
    //       case "잠실" :
    //       self.markers[0].position.lat  = 37.513610;
    //       self.markers[0].position.lng = 127.101099;
    //       self.center.lat  = 37.513610;
    //       self.center.lng = 127.101099;
    //       break;
    //       case "종로" :
    //       self.markers[0].position.lat  = 37.573394;
    //       self.markers[0].position.lng = 126.979624;
    //       self.center.lat  = 37.573394;
    //       self.center.lng = 126.979624;
    //       break;
    //       case "혜화" :
    //       self.markers[0].position.lat  = 37.583979;
    //       self.markers[0].position.lng = 127.002063;
    //       self.center.lat  = 37.583979;
    //       self.center.lng = 127.002063;
    //       break;
    //       case "용산" :
    //       self.markers[0].position.lat  = 37.530503;
    //       self.markers[0].position.lng = 126.964839;
    //       self.center.lat  = 37.530503;
    //       self.center.lng = 126.964839;
    //       break;
    //       case "합정" :
    //       self.markers[0].position.lat  = 37.549916;
    //       self.markers[0].position.lng = 126.914034;
    //       self.center.lat  = 37.549916;
    //       self.center.lng = 126.914034;
    //       break;
    //       case "목동" :
    //       self.markers[0].position.lat  = 37.526577;
    //       self.markers[0].position.lng = 126.864042;
    //       self.center.lat  = 37.526577;
    //       self.center.lng = 126.864042;
    //       break;
    //
    //     }
    //   }
    // }
  },

  computed(){
  },
////
  created(){
    var self = this;
    if(self.detailAll.locations[0]){
      switch(self.detailAll.locations[0].region){
        case "고려대" :
        self.markers[0].position.lat  = 37.591034;
        self.markers[0].position.lng = 127.027796;
        self.center.lat  = 37.591034;
        self.center.lng = 127.027796;
        break;
        case "서울대" :
        self.markers[0].position.lat  = 37.481272;
        self.markers[0].position.lng = 126.952717;
        self.center.lat  = 37.481272;
        self.center.lng = 126.952717;
        break;
        case "연세대" :
        self.markers[0].position.lat  = 37.565988;
        self.markers[0].position.lng = 126.938604;
        self.center.lat  = 37.565988;
        self.center.lng = 126.938604;
        break;
        case "홍익대" :
        self.markers[0].position.lat  = 37.558335;
        self.markers[0].position.lng = 126.925534;
        self.center.lat  = 37.558335;
        self.center.lng = 126.925534;
        break;
        case "이화여대" :
        self.markers[0].position.lat  = 37.562096;
        self.markers[0].position.lng = 126.946872;
        self.center.lat  = 37.562096;
        self.center.lng = 126.946872;
        break;
        case "부산대" :
        self.markers[0].position.lat  = 35.233914;
        self.markers[0].position.lng = 129.079764;
        self.center.lat  = 35.233914;
        self.center.lng = 129.079764;
        break;
        case "중앙대" :
        self.markers[0].position.lat  = 37.504368;
        self.markers[0].position.lng = 126.957018;
        self.center.lat  = 37.504368;
        self.center.lng = 126.957018;
        break;
        case "건국대" :
        self.markers[0].position.lat  = 37.541052;
        self.markers[0].position.lng = 127.079407;
        self.center.lat  = 37.541052;
        self.center.lng = 127.079407;
        break;
        case "한양대" :
        self.markers[0].position.lat  = 37.557445;
        self.markers[0].position.lng = 127.045300;
        self.center.lat  = 37.557445;
        self.center.lng = 127.045300;
        break;
        case "강남" :
        self.markers[0].position.lat  = 37.498470;
        self.markers[0].position.lng = 127.027610;
        self.center.lat  = 37.498470;
        self.center.lng = 127.027610;
        break;
        case "신촌" :
        self.markers[0].position.lat  = 37.560218;
        self.markers[0].position.lng = 126.942333;
        self.center.lat  = 37.560218;
        self.center.lng = 126.942333;
        break;
        case "사당" :
        self.markers[0].position.lat  = 37.476823;
        self.markers[0].position.lng = 126.981654;
        self.center.lat  = 37.476823;
        self.center.lng = 126.981654;
        break;
        case "잠실" :
        self.markers[0].position.lat  = 37.513610;
        self.markers[0].position.lng = 127.101099;
        self.center.lat  = 37.513610;
        self.center.lng = 127.101099;
        break;
        case "종로" :
        self.markers[0].position.lat  = 37.573394;
        self.markers[0].position.lng = 126.979624;
        self.center.lat  = 37.573394;
        self.center.lng = 126.979624;
        break;
        case "혜화" :
        self.markers[0].position.lat  = 37.583979;
        self.markers[0].position.lng = 127.002063;
        self.center.lat  = 37.583979;
        self.center.lng = 127.002063;
        break;
        case "용산" :
        self.markers[0].position.lat  = 37.530503;
        self.markers[0].position.lng = 126.964839;
        self.center.lat  = 37.530503;
        self.center.lng = 126.964839;
        break;
        case "합정" :
        self.markers[0].position.lat  = 37.549916;
        self.markers[0].position.lng = 126.914034;
        self.center.lat  = 37.549916;
        self.center.lng = 126.914034;
        break;
        case "목동" :
        self.markers[0].position.lat  = 37.526577;
        self.markers[0].position.lng = 126.864042;
        self.center.lat  = 37.526577;
        self.center.lng = 126.864042;
        break;

      }
    }
  },

  mounted() {
    // var location = document.querySelector('.location')
    // var body = document.querySelector('body')
    // //
    // var script = document.createElement('script');
    // script.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjUnvTeaPsjSyxabVD9CFTNbEbnS8mZ4o&callback=initMap ");
    // script.setAttribute('class', 'map')
    // location.appendChild(script)
    //
    // var scriptInit = document.createElement('script');
    // scriptInit.setAttribute('class', 'init')
    // var initContent = document.createTextNode (
    //   function initMap() {
    //     // Create a map object and specify the DOM element for display.
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       scrollwheel: false,
    //       zoom: 8
    //     });
    //   }
    // )
    // scriptInit.appendChild(initContent)
    // location.appendChild(scriptInit)

//
  },
  beforeDestroy(){
    // var location = document.querySelector('.location')
    // var script = document.querySelector('.map')
    // console.log(location)
    // console.log(script)
    //
    // location.removeChild(script)


    // location.removeChild(script)

    // console.log('destroy')
    // var body = document.querySelector('body')
    // var location = document.querySelector('.location')
    //
    // console.log('locatoin:', location)
    // var maps = document.querySelector('.map')
    // console.log('map:',maps)
    //
    //
    //
    // var scriptInit = document.querySelector('.init')

  },



}
</script>

  <style lang="sass" scoped>
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_location"
    .g-map
      // width: 500px
      height: 600px
      pointer-events: none

  </style>
