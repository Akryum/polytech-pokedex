<template>
  <BaseImage
    :src="imageUrl"
    :alt="`Pokemon ${pokemon.id}`"
  />
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },

  computed: {
    imageUrl () {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`
    }
  }
}
</script>
