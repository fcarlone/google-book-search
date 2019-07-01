const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("book", BookSchema);
