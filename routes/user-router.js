const express = require('express');
const router = express.Router();
const { registerUser, loginUser,logoutUser } = require('../controller/AuthController');

// Registration Route (Make sure this is exactly as the form action)
router.post('/register', registerUser);  // Register endpoint
router.post('/login', loginUser);  // Login endpoint
router.get('/logout', logoutUser);  // logout

module.exports = router;
