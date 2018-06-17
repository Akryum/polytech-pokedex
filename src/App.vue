<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>
    <router-view @toggle-favorite="onToggleFavorite()"/>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    onToggleFavorite () {
      console.log('test')
    }
  }
}
</script>

<style lang="stylus">
@import '~@/style/main'
</style>
