import '@babel/polyfill'
import Vue from 'vue'
import router from './router'
import './plugins/vuetify'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import VueScrollTo from 'vue-scrollto'



Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(VueScrollTo)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
