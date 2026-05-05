const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    const token = req.header('Authorization');

    // access denied if do not have token
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied ❌" });
    }

    try {
        
        const finalToken = token.startsWith('Bearer ') ? token.slice(7, token.length).trimLeft() : token;

        
        const decoded = jwt.verify(finalToken, process.env.JWT_SECRET);

        
        req.user = decoded;
        next(); 
        
    } catch (error) {
        res.status(401).json({ message: "Token is not valid ❌" });
    }
};

module.exports = authMiddleware;