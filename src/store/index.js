import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/module-a'
import moduleB from './modules/module-b'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  allNum: 0,
  user: ''
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
