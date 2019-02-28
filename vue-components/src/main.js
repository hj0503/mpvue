import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.prototype._ = _

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
