import { createStore } from 'vuex'
import axios from 'axios'
import { useRoute } from 'vue-router'
export default createStore({
  state: {
    events: []
  },
  getters: {
    getEvent: (state) => {
      const event = state.events.find(event => event.id === useRoute().params.event)
      return event
    },
    getAllEvents (state) {
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
        axios.get('http://127.0.0.1:8010/proxy')
          .then(response => {
            commit('SET_EVENTS', response.data)
          })
      
    }
  }
})
