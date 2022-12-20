<script setup>
import ImageHeader from '../components/ImageHeader.vue'
import Times from '../components/Times.vue'
import TicketSelector from '../components/TicketSelector.vue';
import { mapGetters } from 'vuex'

function addZero(minutes) {
  if (minutes < 10) {minutes = "0" + minutes}
  return minutes;
}
function getDate(data) {
  const date = data.slice(0, 10)
  return date
}
function getTime(data) {
  const hours = addZero(new Date(data).getHours())
  let minutes = addZero(new Date(data).getMinutes())
  return hours+':'+minutes
}
</script>
<script>
export default {
    mounted() {
        this.$store.dispatch("recallEvents");
    },
    computed: {
        ...mapGetters({
            events: "getAllEvents",
            event: "getEvent"
        }),
        eventImage() {
            const image = "https://www.eventim-light.com/dk/api/image/" + this.event.image.id + "/shop_cover@2x/webp";
            return image;
        }
    },
    components: { TicketSelector }
}
</script>
<template>
  <div class="page-event">
    <ImageHeader :image="eventImage"/>
    <div class="page-event__container">
      <div class="page-event__title">
        <div class="page-event__header">{{ event.header }}</div> 
        <h1>{{ event.title }}</h1>
        <div class="page-event__subtitle">{{ event.subtitle }}</div>
      </div>
      <div class="page-event__facts border-1">
        <div class="page-event__datetime">
          <div class="block-s">
            <Times 
            title="Date & Time"
            :date="event.start"
            timePrefix="From"
            />
            <Times 
            :date="event.end"
            timePrefix="To"
            />
          </div>
          <div class="block-s">
            <Times 
            title="Door Open"
            :date="event.doorsOpen"
            timePrefix="From"
            />
            <Times 
            :date="event.doorsOpen"
            timePrefix="To"
            />
          </div>
        </div>
        <div class="page-event__location">
          <h2>Location</h2> 
          <div class="page-event__lh">
            {{event.venue.name}}<br>
            {{event.venue.street}}<br>
            {{event.venue.zipCode}} {{event.venue.city}}
          </div>
        </div>
        <div class="page-event__price-info"></div>
      </div>
      <TicketSelector
        :prices="event.minPrice"
        :status="event.soldout"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-event {
  width: 100%;
  padding: 0 12px;

  &__container {
    width: auto;
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 16px;
  }
  &__header{
    height: auto;
    font-size: 13px;
    line-height: 15px;
  }
  &__subtitle, &__title {
    font-size: 18px;
    line-height: 24px;
  }
  &__title {
    margin: 8px 0 24px 0;
  }
  &__facts {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: stretch;
    margin-bottom: 16px;
    @media screen and (min-width: 600px) {
      flex-direction: row;
    }
    & > div {
      flex: 1 1 50%;
      padding: 8px 12px;
    }
  }
}
</style>

