module.exports = {
  addMovie: async (parent, args, { Movie }, info) => {
    const movie = await Movie.create(args.data);
    return movie;
  },
};
