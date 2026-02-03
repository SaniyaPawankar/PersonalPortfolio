import jwt from "jsonwebtoken";

const authAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Unauthorized! Token missing"
        });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.split(" ")[1];

    try {
        // Verify token using env variable
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded data to request
        req.admin = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or Expired Token"
        });
    }
};

export { authAdmin };
