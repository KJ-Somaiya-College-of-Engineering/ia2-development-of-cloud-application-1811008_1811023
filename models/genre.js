const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  genre: { type: String, required: true },
});

module.exports = mongoose.model("Genre", genreSchema, "genres");

