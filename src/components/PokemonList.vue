<template>
  <div class="pokemon-list">
    <h1>Pokedex</h1>
    <div class="toolbar">
      <input v-model="search" placeholder="Filter...">
    </div>

    <BaseLoader v-if="!pokemons"/>

    <template v-else>
      <div class="pokemons">
        <PokemonListItem
          v-for="pokemon of displayedPokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
        />
      </div>

      <div class="bottom-actions">
        <BaseLoader v-if="loadingMore"/>
        <button v-else @click="showMore()">Load more</button>
      </div>
    </template>
  </div>
</template>

<script>
import PokemonListItem from './PokemonListItem'

import POKEMONS from '../graphql/pokemons.gql'

let page = 0

export default {
  components: {
    PokemonListItem
  },

  data () {
    return {
      search: '',
      loadingMore: false
    }
  },

  apollo: {
    pokemons: POKEMONS
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
  },

  methods: {
    async showMore () {
      this.loadingMore = true
      page++
      // Fetch more data and transform the original result
      await this.$apollo.queries.pokemons.fetchMore({
        // New variables
        variables: {
          page
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newPokemons = fetchMoreResult.pokemons

          return {
            pokemons: [
              ...previousResult.pokemons,
              ...newPokemons
            ]
          }
        }
      })

      this.loadingMore = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/style/imports'

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
