<script setup>
import Times from '../components/Times.vue'
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <v-card data-cy="Card_card" class="card">
    <div class="card__media-wrapper">
      <div class="card__media">
        <router-link :to="{ name: 'details', params: { event: event.id }}" class="card__media-link">
          <v-img
            data-cy="Card-Media_image"
            :src="'https://www.eventim-light.com/dk/api/image/'+event.image.id+'/shop_preview/webp'"
            class="card-image lazy"
            cover
            lazy="loaded"
          />
        </router-link>
      </div>
    </div>
    <div class="card__content">
      <div class="card__title-wrapper">
        <v-card-title class="card__title">
          {{event.title}}
        </v-card-title>
        <router-link :to="{ name: 'details', params: { event: event.id }}" class="btn btn--primary">
          <span v-if="event.soldout">Not Available</span>
          <span v-else>Ticket</span>
        </router-link>
      </div>
      <div class="card__details">
        <Times 
          :date="event.start"
          space
        />
      </div>
      <div class="card__details card__location">
        <span class="icon-text">
          <font-awesome-icon icon="fa-solid fa-location-dot" />{{event.venue.name}}, {{event.venue.city}}
        </span>
      </div>
    </div>
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
  padding-bottom: 1rem;

  &__media:hover{
      transform: scale(1.5);
    
  }
  &__media-wrapper {
    margin-bottom: 12px;
    overflow: hidden;
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
    font-size: 20px;
    line-height: 24px !important;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  &__details {
    color: var(--soft);
  }
}
.icon-text {
  padding: 0 1rem;
  padding: 0 1rem;
  display: flex;
  align-items: baseline;
  & svg {
    margin-right: .25rem;
  }
}
</style> 