import Vue from 'vue'
import Router from 'vue-router'

import { routes } from './routes'
// import { checkAccessMiddleware } from './middleware'

Vue.use(Router)

const router = new Router({
  routes
})

// router.beforeEach(checkAccessMiddleware)

export default router
