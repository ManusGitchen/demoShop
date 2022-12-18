<script setup>
import EventCard from '../components/EventCard.vue'
import axios from 'axios'
import { ref } from 'vue'
</script>
<script>
export default {
  components: [EventCard],
  data() {
    return {
      events: ref(0)
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8010/proxy')
        .then(response =>{
          console.log(response.data)
          this.events = response.data
        })
  }
}
</script>
<template>
  <div class="page-event-list__cards">
    <div class="page-event-list__card" v-for="event in events">
      <EventCard :event="event"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-event-list {
  &__cards {
    padding: 0 4px 0 3px;
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;
    align-items: stretch;
    list-style: none;
  }
  &__card {
    padding: 0 8px;
    flex: 0 0 33.33333333333333%;
    max-width: 33.33333333333333%;
    display: flex;
    align-items: stretch;
  }
}
</style>
