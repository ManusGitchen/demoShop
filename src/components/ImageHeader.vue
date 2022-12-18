<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="header-image">
      <div class="header-image__container">
        <div class="header-image__image-container">
          <div class="aspect-ratio">
            <v-img
              data-cy="Card-Media_image"
              :src="'https://www.eventim-light.com/dk/api/image/'+event.image.id+'/shop_preview/webp'"
              class="card-image lazy"
              cover
              lazy="loaded"
            />
          </div>
        </div>
        <div class="header-image__blur-container">
          <!-- <div class="header-image__blur-image lazy-bg" v-bind:style="{createBGImage}"></div> -->
        </div>
      </div>
    </div>
</template>