import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/home/index.vue') },
  { path: '/login', component: () => import('@/views/login/Index.vue') }
]
