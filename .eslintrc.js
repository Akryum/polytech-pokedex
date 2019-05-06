module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'literal'
      }
    ]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  plugins: [
    'graphql'
  ]
}