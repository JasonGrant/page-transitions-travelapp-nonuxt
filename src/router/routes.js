import Home from './pages/home'
import Group from './pages/group'
import Place from './pages/place'

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
]
