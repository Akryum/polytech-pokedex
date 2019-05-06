<template>
  <div class="pokemon-list">
    <h1>Pokedex</h1>
    <div class="toolbar">
      <input v-model="search" placeholder="Filter...">
    </div>
    <div class="pokemons">
      <PokemonListItem
        v-for="pokemon of displayedPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import PokemonListItem from './PokemonListItem'
import pokemons from '@/assets/pokemons.json'

export default {
  components: {
    PokemonListItem
  },

  data () {
    return {
      pokemons,
      search: ''
    }
  },

  computed: {
    displayedPokemons () {
      if (this.search) {
        const regex = new RegExp(this.search, 'i')
        return this.pokemons.filter(
          pokemon => pokemon.name.match(regex)
        )
      }
      return this.pokemons
    }
  }
}
</script>

<style lang="stylus" scoped>
.pokemon-list
  margin $padding

.pokemons
  display grid
  grid-template-columns repeat(auto-fill, 200px)
  grid-auto-rows 200px
  grid-gap 12px

.toolbar
  margin-bottom $padding
</style>
