
import store from '@/store'

/**
 * Check access permission to auth routes
 */
export function checkAccessMiddleware (to, from, next) {
  if (store.state.users.fullName == '') {
    store.dispatch('users/getSession').then((response) => {
      next()
    })
  } else {
    next()
  }
}
