<script setup>
import EventCard from '../components/EventCard.vue'
import { mapGetters } from 'vuex'
</script>
<script>
export default {
  components: [EventCard],
  mounted() {
      this.$store.dispatch('recallEvents')
  },
  computed: {
    ...mapGetters({
      events: 'getAllEvents'
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
    flex: 0 0 100%;
    max-width: 100%;
    @media screen and (min-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media screen and (min-width: 992px) {
      flex: 0 0 33.3333%;
      max-width: 33.3333%;
    }
    display: flex;
    align-items: stretch;
  }
}
</style>
