import { createStore } from 'vuex'

export default createStore({
  state() { },
  getters: {},
  mutations: {},
  actions: {
    eventData({ commit }, eventData) {
      console.log(eventData)
    }
  }
})
