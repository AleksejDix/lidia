import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('@/views/Accordion.vue'),
      children: [
        {
          path: 'nested',
          name: 'nested',
          component: () => import('@/views/Tabs.vue')
        }
      ]
    },
    {
      path: '/blog',
      component: () => import('@/views/Blog.vue'),
      children: [
        {
          path: '',
          name: 'blog',
          component: () => import('@/views/Tabs.vue')
        },
        {
          path: ':article+',
          name: 'article',
          component: () => import('@/views/Article.vue')
        }
      ]
    }
  ]
})

export default router
