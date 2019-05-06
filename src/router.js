import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonList
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: PokemonDetails,
      props: true
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
function scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }

      if (document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    if (to.matched.some(m => m.meta.scrollToTop)) {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }

    return position
  }
}
