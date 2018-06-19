<template>
  <div class="pokemon-details">
    <BaseLoader v-if="$apollo.loading"/>

    <template v-if="pokemon">
      <div class="id">
        <span class="symbol">#</span>
        <span class="number">{{ pokemon.id }}</span>
      </div>

      <div class="name">{{ pokemon.name }}</div>

      <div class="types">
        <div
          v-for="type of pokemon.types"
          :key="type.id"
          class="type"
        >{{ type.id }}</div>
      </div>

      <PokemonImage
        :pokemon="pokemon"
        class="preview"
      />

      <button
        class="toggle-favorite"
        @click="toggleFavorite()"
      >
        Toggle favorite
      </button>
    </template>

    <div v-else class="empty">Pokemon not found</div>
  </div>
</template>

<script>
import PokemonImage from './PokemonImage.vue'
import POKEMON from '../graphql/pokemon.gql'

export default {
  name: 'PokemonDetails',

  components: {
    PokemonImage
  },

  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },

  apollo: {
    pokemon: {
      query: POKEMON,
      variables () {
        return {
          id: this.id
        }
      }
    }
  },

  created () {
    console.log(this.$route.params)
  },

  methods: {
    toggleFavorite () {
      this.$emit('toggle-favorite', this.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/style/imports'
.pokemon-details
  background $color-grey
  border-radius $br
  margin $padding
  padding $padding
.id
  .symbol
    color $color-grey-dark
.name
  font-size 2em
  font-weight lighter
.preview
  width 192px
  height @width
  >>> .image
    image-rendering pixelated

.types
  display flex
  .type
    padding 6px
    border-radius $br
    margin-right 4px
    background $color-grey-dark
    color white
</style>
