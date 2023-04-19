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
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/Calendar.vue')
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
    // {
    //   path: '/carousel',
    //   name: 'carousel',
    //   component: () => import('@/views/Carousel.vue')
    // },
    {
      path: '/selection',
      name: 'selection',
      component: () => import('@/views/Selection.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/Form.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/Table.vue'),
      props: (route) => ({
        search: route.query.search || '',
        page: parseInt((route.query.page as string) || '1', 10),
        perPage: parseInt((route.query.perPage as string) || '10', 10),
        searching: Array.isArray(route.query.searching) ? route.query.searching : [],
        filtering: Array.isArray(route.query.filtering) ? route.query.filtering : []
      })
    }
  ]
})

export default router
