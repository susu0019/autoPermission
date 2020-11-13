import Toast from '@/components/toast'
import Vue from 'vue'
const ToastConstructor = Vue.extend(Toast)
function showToast (text, duration = 2000) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        text: text,
        show: true
      }
    }
  })
  document.body.appendChild(toastDom.$el)
  setTimeout(() => {
    toastDom.show = false
  }, duration)
}

function toastRegistry () {
  Vue.prototype.$toast = showToast
}
export default toastRegistry
