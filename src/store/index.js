import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    events: []
  },
  getters: {
    getEvent: (state) => (id) => {
      const event = state.events.find(event => event.id === id)
      return event
    },
    getAllEvents: (state) => {
      return state.events
    }
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    recallEvents({ state, commit }) {
      if (state.events.length === 0) {
        axios.get('http://127.0.0.1:8010/proxy')
          .then(response => {
            commit('SET_EVENTS', response.data)
          })
      }
      console.log(state.events.length)
    }
  }
})
