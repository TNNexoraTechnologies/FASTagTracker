import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    console.log("Middleware HIT"); 
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: "No token, access denied" });
    }

    try {
        // verify token (example using JWT)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next(); // move to next function (like controller)
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

export default authMiddleware;
