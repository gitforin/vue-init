// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible' //手淘适配
import router from './router'
import Mint from 'mint-ui';
import store from '@/store/index';
import 'mint-ui/lib/style.css';
import http from '../http/index'

Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.$http = http // ajax请求方法
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
