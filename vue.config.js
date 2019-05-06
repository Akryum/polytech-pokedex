module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        import: ['~@/style/imports']
      }
    }
  }
}
