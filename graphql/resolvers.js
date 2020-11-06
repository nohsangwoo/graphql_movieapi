import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => {
      return getMovie(id);
    },
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
