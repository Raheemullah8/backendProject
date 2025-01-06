const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  order: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});
module.exports = mongoose.model("user", userSchema);