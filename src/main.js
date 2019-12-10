// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
window.$ = $
window.jQuery = $

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
// 页面权限判断
// router.beforeEach((to, from, next) => {
//   if (store.state.token) {
//     if (!store.state.uid) {
//       store.commit('setUid')
//       // 请求路由信息
//       store.dispatch('getRoutes', {username: store.state.username, password: store.state.password})
//     }
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
