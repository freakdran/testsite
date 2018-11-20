import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import store from '@/vuex/store';
import router from '@/router';

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
