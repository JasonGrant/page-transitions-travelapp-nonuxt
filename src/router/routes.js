import Home from './pages/home'
import Group from './pages/group'
import Place from './pages/place'
// import Icons from './views/Icons'
// import Applications from './views/Applications'
// import UserManagement from './views/UserManagement'


export const routes = [
  {
    name: 'home',
    path: '/',
    components: {
      main: Home
    }
  },
  {
    name: 'group',
    path: '/group',
    components: {
      main: Group
    }
  },
  {
    name: 'place',
    path: '/place',
    components: {
      main: Place
    }
  }
  // {
  //   name: 'icons',
  //   path: '/icons',
  //   components: {
  //     main: Icons
  //   }
  // },
  // {
  //   name: 'applications',
  //   path: '/applications',
  //   components: {
  //     main: Applications
  //   }
  // },
  // {
  //   name: 'usermanagement',
  //   path: '/usermanagement',
  //   components: {
  //     main: UserManagement
  //   },
  //   beforeEnter: (to, from, next) => {
  //     console.log('This before enter gets run from the routes file and happens after the global.')
  //     next()
  //   }
  // }
]
