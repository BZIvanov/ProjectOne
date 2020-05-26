exports.resolvers = {
  Query: {
    hello: () => 'Hello world!',
    name() {
      return 'Mariana';
    },
  },
};
