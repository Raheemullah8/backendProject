const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  email: String,
  password: String,
  product: {
    type: Array,
    default: [],
  },

  contact: Number,
  picture: String,
  gstin: String,
});
module.exports = mongoose.model("owner", ownerSchema);
