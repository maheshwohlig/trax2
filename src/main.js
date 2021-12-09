import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSmoothScroll from 'vue2-smooth-scroll'
import vuelidate from 'vuelidate'
Vue.use(vuelidate)
Vue.use(VueSmoothScroll, {
  duration: 2000,
  updateHistory: false,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
