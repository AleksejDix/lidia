import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('@/views/Modal.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('@/views/Accordion.vue')
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('@/views/Tabs.vue')
    }
  ]
})

export default router
