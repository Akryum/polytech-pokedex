function processPokemon (pokemon) {
  pokemon.types = [
    { id: pokemon.type_1 }
  ]
  pokemon.type_2 && pokemon.types.push({
    id: pokemon.type_2
  })
}

exports.list = async ({ page = 0 }, context) => {
  const result = await context.db.all('SELECT * FROM pokemon_base ORDER BY id LIMIT ?, 50', page * 50)
  result.forEach(processPokemon)
  return result
}

exports.find = async ({ id }, context) => {
  const result = await context.db.get('SELECT * FROM pokemon_base WHERE id = ?', id)
  processPokemon(result)
  return result
}
