const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controller/AuthController');

router.get("/", (req, res) => {
    res.send('User route is working');
});

router.post('/register', registerUser);
router.post('/login',loginUser);

module.exports = router;
