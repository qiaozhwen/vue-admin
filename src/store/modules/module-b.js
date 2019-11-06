const state = {
  num: 1
}
const mutations = {
  incrementB (state, data) {
    state.num = state.num + data
  }
}
const actions = {
  incrementDataB (context, data) {
    context.commit('incrementB', data)
  }
}

export default {
  state,
  actions,
  mutations
}
