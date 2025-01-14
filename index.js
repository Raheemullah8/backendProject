const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const session = require("express-session");
require("dotenv").config(); // To load environment variables

// Importing routes
const ownerRoute = require("./routes/ownerRouter");
const productRoute = require("./routes/product-router");
const userRoute = require("./routes/user-router");
const home = require("./routes/indejs");

// Database connection
const db = require("./config/mongoose-connection");

const app = express();

// Setting the view engine to EJS
app.set("view engine", "ejs");
app.set('trust proxy', 1)

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Serving static files (CSS, JS, images)
app.use(cookieParser()); // To parse cookies

// Session and Flash message configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Secure session secret from environment variables
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash()); // Flash messages middleware

// Route setup
app.use("/owner", ownerRoute); // Owner routes
app.use("/user", userRoute); // User routes
app.use("/products", productRoute); // Product routes
app.use("/", home); // Home route

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
