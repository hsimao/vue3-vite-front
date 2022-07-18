import { createRouter, createWebHistory } from 'vue-router'
import { isMobile } from '@/utils/flexible'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

const router = createRouter({
  history: createWebHistory(),
  routes: isMobile() ? mobileRoutes : pcRoutes
})

export default router
