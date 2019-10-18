import '@babel/polyfill'
import Vue from 'vue'
import router from './router'
import gtagjs from 'vue-gtagjs'
import './plugins/vuetify'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import VueScrollTo from 'vue-scrollto'



Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(VueScrollTo)
gtagjs(router, 'UA-150377051-1', {debug: true, scriptId: 'gtagjs'})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
