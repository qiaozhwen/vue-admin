import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/module-a'
import moduleB from './modules/module-b'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  allNum: 0,
  user: '',
  token: getCookie('userToken'),
  routes: getCookie('routes'),
  uid: null,
  username: '',
  collapseStatus: 'noStatus'
}

export function setCookie (cname, value) {
  document.cookie = cname + '=' + escape(value) + ';expires=3'
}

export function getCookie (cname) {
  if (document.cookie.length > 0) {
    let cstart = document.cookie.indexOf(cname + '=')
    if (cstart !== -1) {
      cstart = cstart + cname.length + 1
      let cend = document.cookie.indexOf(';', cstart)
      if (cend === -1) {
        cend = document.cookie.length
      }
      return document.cookie.substr(cstart, cend)
    }
  }
  return ''
}

const store = new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  modules: {
    moduleA,
    moduleB
  }
})

export default store
