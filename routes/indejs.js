const express = require("express");
const { isLoggedin } = require("../middlerware/isLoggedin");
const router = express.Router();
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, isLggedin: false });
});
router.get("/shop", isLoggedin, async (req, res) => {
  let products = await productModel.find();
  let success = req.flash("sucess");
  res.render("shop", { products, success });
});
router.get("/addtocart/:productid", isLoggedin, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("sucess", "Product added to cart");
  res.redirect("/shop");
});
router.get("/cart", isLoggedin, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");
  res.render("cart", { user });
});

module.exports = router;
