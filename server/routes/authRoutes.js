import express from "express";
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// const {
//     registerUser,
//     loginUser
// } = require('../controllers/authController');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;