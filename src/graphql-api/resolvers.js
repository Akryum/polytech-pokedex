const GraphQLJSON = require('graphql-type-json')
// Connectors
const pokemons = require('./connectors/pokemons')

module.exports = {
  JSON: GraphQLJSON,

  Query: {
    pokemons: (root, args, context) => pokemons.list(args, context),
    pokemon: (root, args, context) => pokemons.find(args, context)
  },

  Mutation: {
    myMutation: (root, args, context) => {
      const message = 'My mutation completed!'
      context.pubsub.publish('hey', { mySub: message })
      return message
    }

  },

  Subscription: {
    mySub: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('hey')
    }

  }
}
