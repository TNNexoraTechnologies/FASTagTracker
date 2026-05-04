// export const loginUser = (req, res) => {
//   // logic
// };

import Transaction from '../models/TollTransaction.js';
import User from '../models/User.js';

// ================= CREATE TRANSACTION =================
// Handles both TOLL_DEBIT and RECHARGE
export const createTransaction = async (req, res) => {
  try {
    const {
      userId,
      vehicleNumber,
      tollName,
      amount,
      transactionType = 'TOLL_DEBIT',
      location = ''
    } = req.body;

    // -------- basic validation --------
    if (!userId || !vehicleNumber || !amount) {
      return res.status(400).json({ message: "userId, vehicleNumber, amount are required" });
    }

    if (amount <= 0) {
      return res.status(400).json({ message: "Amount must be greater than 0" });
    }

    // -------- get user --------
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // NOTE: Your User schema currently doesn't have a balance field.
    // We’ll derive last known balance from previous transaction.
    const lastTxn = await Transaction.findOne({ user: userId })
      .sort({ createdAt: -1 });

    const previousBalance = lastTxn ? lastTxn.balanceAfter : 0;

    let newBalance;

    if (transactionType === 'TOLL_DEBIT') {
      if (previousBalance < amount) {
        return res.status(400).json({ message: "Insufficient balance" });
      }
      newBalance = previousBalance - amount;
    } else if (transactionType === 'RECHARGE') {
      newBalance = previousBalance + amount;
    } else {
      return res.status(400).json({ message: "Invalid transaction type" });
    }

    // -------- create transaction --------
    const transaction = await Transaction.create({
      user: userId,
      vehicleNumber: vehicleNumber.toUpperCase().trim(),
      tollName: tollName || '',
      amount,
      balanceBefore: previousBalance,
      balanceAfter: newBalance,
      transactionType,
      location
    });

    res.status(201).json(transaction);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= GET USER TRANSACTIONS =================
export const getUserTransactions = async (req, res) => {
  try {
    const { userId } = req.params;

    const transactions = await Transaction.find({ user: userId })
      .sort({ createdAt: -1 });

    res.status(200).json(transactions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};