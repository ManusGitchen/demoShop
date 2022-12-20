<script setup>
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
      <font-awesome-icon icon="fa-solid fa-calendar-days" />
      {{ getDate(date)}}
    </span>
    <span class="nowrap icon-text">
      <font-awesome-icon icon="fa-solid fa-clock" />
      {{ getTime(date)}}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.nowrap {
  margin-right: .5rem;
}
.icon-text {
  margin-left: 1rem;
}
</style>