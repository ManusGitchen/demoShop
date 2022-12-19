<script setup>
const props = defineProps({
  image: {
    type: String,
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
              :src="image"
              class="card-image lazy"
              cover
              lazy="loaded"
            />
          </div>
        </div>
        <div class="header-image__blur-container">
          <div class="header-image__blur-image lazy-bg" v-bind:style="{ 'background-image': 'url(' + image + ')' }"></div>
        </div>
      </div>
    </div>
</template>