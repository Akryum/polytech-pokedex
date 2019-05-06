<template>
  <router-link
    :to="{
      name: 'pokemon',
      params: {
        id: pokemon.id
      }
    }"
    class="pokemon-list-item"
  >
    <div class="name">{{ pokemon.name }}</div>
    <PokemonImage
      :pokemon="pokemon"
      class="preview"
    />
  </router-link>
</template>

<script>
import PokemonImage from './PokemonImage.vue'
import gql from 'graphql-tag'

export const fragments = {
  pokemon: gql`
    fragment pokemon on Pokemon {
      id
      name
    }
  `
}

export default {
  components: {
    PokemonImage
  },

  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.pokemon-list-item
  display flex
  flex-direction column
  align-items center
  justify-content center
  text-align center
  background $color-grey
  border-radius $br
  transition background .15s
  color inherit
  text-decoration none
  &:hover
    color $color-primary
    background $color-secondary

  .preview
    width 96px
    height @width
</style>
