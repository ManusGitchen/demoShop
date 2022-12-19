import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../pages/Overview.vue'
import ProductDetails from '../pages/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Overview
    },
    {
      path: '/product-details/:event',
      name: 'details',
      component: ProductDetails,
      props: { ProductDetails: true, Overview: false }
    }
  ]
})

export default router
