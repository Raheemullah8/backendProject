const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const { genToken } = require("../utils/genratetoken");

module.exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      return res.status(401).send("You already have an account, please login.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = await userModel.create({
      fullname,
      email,
      password: hashedPassword,
    });

    const token = genToken(user);

    // Send token as a cookie
    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
    res.status(201).send("User Created Successfully");
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send("Server error");
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email: email });

    if (!user) return res.status(403).send("Invalid email or password");

    const result = await bcrypt.compare(password, user.password);

    if (result) {
      const token = genToken(user);
      res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
      res.send("Login Successful");
    } else {
      res.status(403).send("Invalid email or password");
    }
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send("Server error");
  }
};

module.exports.logoutUser = (req, res) => {
  res.cookie("token","")
  res.redirect("/");
}
