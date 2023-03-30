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
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/Menu.vue')
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import('@/views/Pagination.vue')
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('@/views/Dropdown.vue')
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('@/views/Alert.vue')
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: () => import('@/views/Carousel.vue')
    }
  ]
})

export default router
