import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import '@/assets/less/common.less'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h=>h(App)
})
