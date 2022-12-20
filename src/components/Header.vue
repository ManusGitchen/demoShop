<template>
<div class="app-header">
  <router-link to="/" class="app-header__link">
    <v-img
      src="	https://www.eventim-light.com/dk/api/image/5fad9131db967f58a5716f9f/shop_logo_l/webp"
      class="app-header__image lazy"
      lazy="loaded"
    />
  </router-link>
</div>
</template>

<style lang="scss" scoped>
.app-header {
  width: auto;
  max-width: 1171px;
  margin: auto;
  padding: 12px 12px;
  display: flex;
  &__link {
    width: 100%;

    display: flex;
    align-items: center;
  }
  &__image {
    height: 36px;
    @media screen and (min-width: 768px){
      height: 64px;
    }
  }
}
</style>