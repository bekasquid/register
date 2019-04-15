import Vue from 'vue'
import 'babel-polyfill'
import 'classlist-polyfill'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
