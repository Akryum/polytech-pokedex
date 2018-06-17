import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
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
