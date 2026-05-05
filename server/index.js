const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Apni db.js file ko import karein

// .env file ke variables ko load karein
dotenv.config();

// Database connect karne ka function call karein
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Request body se JSON data read karne ke liye

// Test Route
app.get('/api/test', (req, res) => {
    res.send("Server and Database are running!");
});

// Auth Routes ko import karein
const authRoutes = require('./routes/authRoutes');

// Routes ko use karein
app.use('/api/auth', authRoutes);

// Server start karna
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});