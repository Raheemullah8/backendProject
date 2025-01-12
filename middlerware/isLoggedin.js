const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports.isLoggedin = async (req, res, next) => {
  // Check if token is not present in cookies
  if (!req.cookies.token) {
    req.flash('error', 'You need to login first');
    return res.redirect('/'); // Return immediately after redirect
  }

  try {
    // Verify the JWT token
    let token = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    
    // Find the user by email and exclude the password field
    let user = await userModel.findOne({ email: token.email }).select('-password');
    
    // Attach the user to the request object
    req.user = user;
    
    // Continue to the next middleware/route handler
    next();
  } catch (error) {
    // In case of token verification failure, flash an error and redirect
    req.flash('error', 'You need to login first');
    return res.redirect('/'); // Return immediately after redirect
  }
}
