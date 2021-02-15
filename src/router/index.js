import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/views/home/Index.vue'
import login from '@/views/login/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
]

const router = new VueRouter({
  routes,
})

export default router
