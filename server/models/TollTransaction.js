import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
{
    // Reference to user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    // Vehicle identifier (FASTag is vehicle-linked)
    vehicleNumber: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
    },

    // Toll booth / plaza name
    tollName: {
        type: String,
        required: true,
        trim: true,
    },

    // Amount deducted at toll
    amount: {
        type: Number,
        required: true,
        min: 0,
    },

    // Balance BEFORE transaction
    balanceBefore: {
        type: Number,
        required: true,
        min: 0,
    },

    // Balance AFTER transaction
    balanceAfter: {
        type: Number,
        required: true,
        min: 0,
    },

    // Transaction type
    transactionType: {
        type: String,
        enum: ['TOLL_DEBIT', 'RECHARGE'],
        default: 'TOLL_DEBIT',
    },

    // Payment status
    status: {
        type: String,
        enum: ['SUCCESS', 'FAILED', 'PENDING'],
        default: 'SUCCESS',
    },

    // Optional: location info
    location: {
        type: String,
        default: '',
    },
},
{
    timestamps: true,
}
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;