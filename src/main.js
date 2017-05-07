import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/main.less';

import {imageFilter} from './service';
Vue.filter('image',imageFilter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
