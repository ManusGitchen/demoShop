import { createStore } from 'vuex'
import axios from 'axios'
import { useRoute } from 'vue-router'
export default createStore({
  state: {
    events: []
  },
  getters: {
    // Einzelnes Event basierend auf der ID in der URL
    getEvent: (state) => {
      const event = state.events.find(event => event.id === useRoute().params.event)
      return event
    },
    // Alle Events
    getAllEvents(state) {
      return state.events
    }
  },
  mutations: {
    // Alle Events im State ablegen
    SET_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    //Event Daten ziehen, wenn keine vorhanden
    recallEvents({ state, commit }) {
      if (state.events.length < 1) {
        axios.get('http://127.0.0.1:8010/proxy')
          .then(response => {
            commit('SET_EVENTS', response.data)
          })
      }
    }
  }
})
