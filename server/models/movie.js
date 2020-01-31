const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: String,
  year: Number,
  imageUrl: String,
  description: String,
  actorID: String,
});

module.exports = mongoose.model('Movie', movieSchema);
