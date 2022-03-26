import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './config'

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach(to => {
  if (to.fullPath === '/login') {
    return true
  }
  if (!localStorage.getItem('token')) {
    return '/login'
  }
})

export default router
