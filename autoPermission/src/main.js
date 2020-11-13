import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.css'
import store from './store'
import toastRegistry from '@/lib/toast.js'
Vue.use(toastRegistry)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
