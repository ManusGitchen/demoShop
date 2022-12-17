<script>
import EventCard from '../components/EventItem.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    return {
      asyncEventData: (eventData) => store.dispatch('eventData', eventData)
    }
  }
  // life hooks
  onMounted(() => {
    axios.get('http://127.0.0.1:8010/proxy')
        .then(response =>{
          asyncEventData(response.data.data)
          events = response.data.data
          console.log(response)
          // this.$store.dispatch('setEventData', res.data)
        })
  })
}


// methods
</script>

<template>
  <div class="page-event-list__cards">
    <EventItem v-for="event in events" />
  </div>
</template>

<style lang="scss" scoped>
.page-event-list {
  &__cards {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;
    align-items: stretch;
    list-style: none;
  }
}
</style>
