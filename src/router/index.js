import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由模块
import Login from './login/index'
// 全局页面
const Error404 = () =>
  import ("@/views/404");
const Error500 = () =>
  import ("@/views/500");
const Index = () =>
  import ("@/views/index");

// 路由实例
let router = new Router({
  mode: 'hash', // hash 或 history
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    ...Login,
    {
      path: '/500',
      name: '500',
      component: Error500,
    },
    {
      path: '/404',
      name: '404',
      component: Error404,
    },
    {
      path: '*', //404
      component: Error404
    }
  ]
})

export default router;
