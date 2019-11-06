import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'firstPage',
    //   component: resolve => require(['../views/firstPage'], resolve)
    // },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../views/login'], resolve)
    }
    // {
    //   path: '*',
    //   redirect: '/login'
    // }
  ]
})
