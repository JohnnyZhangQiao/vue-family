import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import '@/assets/less/common.less'

Vue.config.productionTip = false

Vue.use(vueResource)
Vue.http.options.emulateJSON = true;


new Vue({
  el: '#app',
  router,
  render: h=>h(App)
})
