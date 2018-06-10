<template>
  <div class="pokemon-details">
    <template v-if="pokemon">
      <div class="id">
        <span class="symbol">#</span>
        <span class="number">{{ pokemon.id }}</span>
      </div>
      <div class="name">{{ pokemon.name }}</div>
      <BaseImage
        :src="pokemon.image"
        :alt="`Pokemon ${pokemon.id}`"
        class="preview"
      />
    </template>
    <div v-else class="empty">
      Pokemon not found
    </div>
  </div>
</template>

<script>
import pokemons from '@/assets/pokemons.json'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },

  computed: {
    pokemon () {
      const id = parseInt(this.id)
      return pokemons.find(
        pokemon => pokemon.id === id
      )
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
</style>
