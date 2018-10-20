import '@babel/polyfill'
import Vue from 'vue'
import router from './router'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
