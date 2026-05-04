import express from "express";
import { registerUser, loginUser } from '../controllers/authController.js';
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// const {
//     registerUser,
//     loginUser
// } = require('../controllers/authController');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/profile', authMiddleware, getProfile);

export default router;