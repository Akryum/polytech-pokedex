const path = require('path')
const sqlite = require('sqlite')

const file = path.resolve(__dirname, '../../../live/Pokedex.db')
const db = sqlite.open(file, {
  cached: true
})
exports.db = db
