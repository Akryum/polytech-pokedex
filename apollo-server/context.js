import { db } from './utils/db'

// Context passed to all resolvers (third argument)
// req => Query
// connection => Subscription
export default async (req, connection) => {
  return {
    db: await db
  }
}
