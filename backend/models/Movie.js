import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  poster: String,
  plot: String,
  genres: [String],
  imdb: {
    rating: Number,
    votes: Number,
    id: Number
  }
});

export default mongoose.model('Movie', MovieSchema, 'movies');
