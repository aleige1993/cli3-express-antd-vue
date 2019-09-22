import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.config.productionTip = false

import Config from './utils/Config';
import Http from './utils/Http';
import UserLogin from './utils/UserLogin';
import Tool from './utils/Tools';
Vue.prototype.$config = Config;
Vue.prototype.$http = new Http();
Vue.prototype.$userLogin = UserLogin;
Vue.prototype.$Tool = Tool;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
