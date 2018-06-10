import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from './components/PokemonList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonList
    }
  ]
})
