import path from 'path'
import os from 'os'
import sqlite from 'sqlite'

const file = path.resolve(os.homedir(), './Pokedex.db')
const db = sqlite.open(file, {
  cached: true
})

export {
  db
}
