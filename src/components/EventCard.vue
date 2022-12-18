<script setup>
// import { mdiClockTimeFourOutline } from '@mdi/js';
// import { mdiCalendarBlank } from '@mdi/js';
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
  
})
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
<template>
  <v-card data-cy="Card_card" class="card">
    <div class="card__media">
      <router-link data-cy="Card-Media_link" :to="{ name: 'details', params: { event: event.id }}">
        <v-img
          data-cy="Card-Media_image"
          :src="'https://www.eventim-light.com/dk/api/image/'+event.image.id+'/shop_preview/webp'"
          class="card-image lazy"
          cover
          lazy="loaded"
        />
      </router-link>
    </div>
    <div class="card__content">
      <div class="card__title-wrapper">
        <v-card-title class="card__title">
          {{event.title}}
        </v-card-title>
        <v-btn variant="text">
          Explore
        </v-btn>
      </div>
      <div class="card__details">
        <!-- <span class="icon-text"><i aria-hidden="true" class="eventim-icons icon">event</i> 13-01-2023</span> -->

        <span class="icon-text"><v-icon icon="mdiCalendarBlank"></v-icon>{{ getDate(event.start)}}</span>
        <span class="icon-text"><v-icon icon="mdiClockTimeFourOutline"></v-icon>{{ getTime(event.start)}}</span>
      </div>
      <div class="card__details">
        <span class="icon-text"><v-icon icon="F00EE"></v-icon>{{event.venue.name}}, {{event.venue.city}}</span>
      </div>
    </div>

  

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn
      ></v-btn>
    </v-card-actions>

  </v-card>
</template>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  border: 1px solid #ececec;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 20px;

  &__media {
    margin-bottom: 12px;
  }

  &__conent {
    padding: 0 12px 12px;
    & > div {
      padding-bottom: 4px;
    }
  }

  &__title-wrapper {
    display: flex;
    align-items: flex-start;
  }

  &__title {
    display: flex;
    flex: auto;
    white-space: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__details {
    opacity: .65;
  }

}
</style> 