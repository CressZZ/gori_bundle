import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'
import App from './App.vue'
import {stores} from './store.js'
// require('./fontello/css/fontello.css');

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

Vue.http.options.root = 'https://mozzi.co.kr/api';

// Vue.http.headers.common['Authorization'] = 'Token 39248c0f2405edb4202fc393e5d7df367601f9cb';



// const bus = new Vue();

// const store = new Vuex.Store({
//   state: {
//     is_load_google_map: false
//   },
//   mutations: {
//     usingGoogleMap (state) {
//       state.is_load_google_map = true;
//     }
//   }
// });

const store = new Vuex.Store (
  stores
);


const router = new VueRouter({
  mode: 'history',
  routes,

  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
},
});


new Vue({
  el: '#app',
  router,
  store,
  // bus,
  render: h => h(App)
})
