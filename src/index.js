import Vue from 'vue'
import App from '@/App'
import '@/assets/less/index.less'

const myApp = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
window.app = myApp
export default myApp
