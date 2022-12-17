import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../pages/Overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Overview
    },
    {
      path: '/product-details',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/ProductDetails.vue')
    }
  ]
})

export default router
