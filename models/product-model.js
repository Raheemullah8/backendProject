const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  price: Numberm,
  name: String,
  discount: {
    type: Number,
    default: 0,
  },
  bgColor: String,
  paneColor: String,
  textColor: String,
});
module.exports = mongoose.model("product", productSchema);
