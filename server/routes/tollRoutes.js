import express from 'express';
import {
    createTransaction,
    getUserTransactions
} from '../controllers/tollController.js';

const router = express.Router();

// Create transaction
router.post('/', createTransaction);

// Get all transactions for a user
router.get('/:userId', getUserTransactions);

export default router;