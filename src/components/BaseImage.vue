<template>
  <div
    :class="{
      loaded
    }"
    class="base-image"
  >
    <img
      v-bind="$attrs"
      :src="src"
      class="image"
      @load="onLoad"
    >
    <transition name="fade">
      <BaseLoader v-if="!loaded" />
    </transition>
  </div>
</template>

<script>
// Prevent showing loading animation if was already loaded before
const alreadyLoaded = new Map()

export default {
  inheritAttrs: false,

  props: {
    src: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      loaded: alreadyLoaded.get(this.src)
    }
  },

  methods: {
    onLoad () {
      this.loaded = true
      alreadyLoaded.set(this.src, true)
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-image
  position relative

  .image
    width 100%
    height @width
    opacity 0
    transition opacity .15s
  &.loaded
    .image
      opacity 1

  .base-loader
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>
