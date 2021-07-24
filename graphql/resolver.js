import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating)
    }
}

export default resolvers;

/* import {people, getById} from './db'

const resolvers = {
    Query: {
        people: () => people,
        person:(_, { id }) => getById(id)
    },
}
 */
export default resolvers;