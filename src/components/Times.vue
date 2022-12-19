<script setup>
// import { mdiClockTimeFourOutline } from '@mdi/js';
// import { mdiCalendarBlank } from '@mdi/js';
const props = defineProps({
  title: {
    type: String
  },
  date: {
    type: String
  },
  timePrefix: {
    type: String
  },
  space: {
    type: Boolean
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
  <h2 v-if="title">{{title}}</h2>
  <div :class="{'icon-text': space}">
    <div v-if="timePrefix" class="time__prefix">{{timePrefix}}</div> 
    <span class="nowrap">
      <!-- <i aria-hidden="true" class="eventim-icons icon">event</i> -->
      {{ getDate(date)}}
    </span>
    <span class="nowrap">
      <!-- <i aria-hidden="true" class="eventim-icons icon">access_time</i> -->
      {{ getTime(date)}}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.icon-text {
  padding: 0 1rem;
}
</style>