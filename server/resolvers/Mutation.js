const jwt = require('jsonwebtoken');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports = {
  signup: async (parent, args, { User }, info) => {
    const { username, email, password } = args.data;
    const newUser = await User.create({ username, email, password });
    const token = createToken(newUser.id);

    return { token, username: newUser.username, email: newUser.email };
  },
  addMovie: async (parent, args, { Movie }, info) => {
    const movie = await Movie.create(args.data);
    return movie;
  },
};
