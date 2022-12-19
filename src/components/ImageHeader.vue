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

</style>