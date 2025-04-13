import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { Uploader } from 'vant';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Uploader)

Vue.config.productionTip = false

// 设置默认请求基地址
axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true  // 允许携带 cookie/session
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
