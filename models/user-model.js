const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "product", // Reference to the 'product' model
    default: [], // Default to an empty array of ObjectId references
  },
  order: {
    type: Array,
    default: [],
  },
  contact: {
    type: Number,
  },
  picture: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
