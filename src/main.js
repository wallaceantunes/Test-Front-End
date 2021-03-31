import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import moment from 'moment';
import store from './store'
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.config.productionTip = false
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
