const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // Guard ko bulao

// Purane Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// NAYA: Protected Route (Day 5 Test)
router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your protected profile! 🛡️", user: req.user });
});

module.exports = router;