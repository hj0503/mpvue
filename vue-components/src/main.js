import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'
import store from './store'

Vue.prototype._ = _

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
