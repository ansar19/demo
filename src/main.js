import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ShardsVue from 'shards-vue'
import vSelect from 'vue-select'

import VueI18n from 'vue-i18n'
import i18n from './i18n'

// Import base styles (Bootstrap and Shards)
import 'bootstrap/dist/css/bootstrap.css';
import 'shards-ui/dist/css/shards.css';
import '@/assets/scss/shards-dashboards.scss'
import '@/assets/scss/meta-table.scss';
import 'vue-select/dist/vue-select.css';

Vue.use(ShardsVue);
Vue.use(VueI18n);
Vue.component('v-select', vSelect);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
