import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ShardsVue from 'shards-vue'
import vSelect from 'vue-select'

// Import base styles (Bootstrap and Shards)
import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'
import '@/assets/scss/shards-dashboards.scss'
import '@/assets/scss/meta-table.scss';
import 'vue-select/dist/vue-select.css';

Vue.use(ShardsVue);
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
