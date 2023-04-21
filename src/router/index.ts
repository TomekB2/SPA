import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/kalkulator-nagazowania',
      name: 'kalkulator-nagazowania',
      component: () => import('../views/ngazView.vue')
    },
    {
      path: '/przelicznik-gestosci',
      name: 'przelicznik-gestosci',
      component: () => import('../views/gesView.vue')
    },
    {
      path: '/kalkulator-alkoholu',
      name: 'kalkulator-alkoholu',
      component: () => import('../views/alkView.vue')
    },
  ]
})

export default router
