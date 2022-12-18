<script setup>
import ImageHeader from '../components/ImageHeader.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
// const route = useRoute()
// console.log(route.params)
</script>
<script>
export default {
  
  data() {
    return {
      route: useRoute(),
      selectedEvent: ref(0),
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8010/proxy')
        .then(response =>{
          this.selectedEvent = response.data.find(event => event.id === this.route.params.event)
        })
  },
  computed:{
    createBGImage(){
      return "'https://www.eventim-light.com/dk/api/image/'"+this.selectedEvent.image.id+"'/shop_preview/webp'"
    }
  }
}
</script>
<template>
  <div class="event-page">
    <ImageHeader :event="selectedEvent"/>
    <div class="page-event__container">
      <div class="page-event__title">
        <div class="page-event__header">
        </div>
        <h1></h1>
        <div class="page-event__subtitle"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-image {
  &__container {
    position: relative;
  }
  &__image-container {
    padding-top: 20px;
    width: auto;
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
  }
  &__blur-container {
    display: block;
    overflow: hidden;
    position: absolute;
    left: -12px;
    right: -12px;
    top: 0;
    bottom: 64px;
    z-index: -10;
  }
  &_image, &__blur-image {
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
  }
  &__blur-image {
    height: 100%;
    transform: scale(1.2);
    -webkit-filter: blur(20px);
    filter: blur(25px);
  }
}
.aspect-ratio {

}
</style>

