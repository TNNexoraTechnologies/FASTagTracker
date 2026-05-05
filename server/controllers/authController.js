const jwt = require('jsonwebtoken'); // to call jsonwebtoken
const User = require('../models/User'); 
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check user 
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // save new user in database
        user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();
        res.status(201).json({ message: "User Registered Successfully ✅" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check user in database
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid Email or Password" });

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Email or Password" });

        // generate  JWT  token
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' } 
        );

        // 4. Success Response bhejien (Password hide karke)
        res.status(200).json({ 
            message: "Login Successful ✅", 
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};