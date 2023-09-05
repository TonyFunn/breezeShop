import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/buy',
        name: 'buy',
        component: () => import('@/views/BuyView.vue'),
      },
      {
        path: '/basket',
        name: 'basket',
        component: () => import('@/views/BasketView.vue'),
      },
      {
        path: '/registeration',
        name: 'registeration',
        component: () => import('../views/registration/RegisterationView.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404/View404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
