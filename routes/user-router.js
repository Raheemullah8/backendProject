const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/AuthController');

router.get("/", (req, res) => {
    res.send('User route is working');
});

router.post('/register', registerUser);

module.exports = router;
