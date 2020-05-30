exports.resolvers = {
  Query: {
    hello: () => 'Hello world!',
    movie: () => {
      return {
        name: 'Matrix',
        year: '2010',
        description: 'Some cool movie',
      };
    },
  },
};
