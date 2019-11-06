const state = {
  count: 1
}
const mutations = {
  increment (state, data) {
    state.count = state.count + data
  }
}
const actions = {
  incrementData (context, data) {
    context.commit('increment', data)
  }
}

export default {
  state,
  actions,
  mutations
}
