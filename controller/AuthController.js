const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const { genToken } = require("../utils/genratetoken");

module.exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) return res.status(401).send("you Already have an account, please login");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = await userModel.create({
      fullname,
      email,
      password: hashedPassword, // Use the hashed password here
    });

    const token = genToken(user);

    // Send token as cookie
    res.cookie("token", token);
    res.send("User Created Successfully");
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send("Server error");
  }
};
