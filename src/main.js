import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import {TweenMax, Power2, TimelineLite, Expo, Sine, Back} from "gsap"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
