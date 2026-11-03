
const jwt = require("jsonwebtoken");

// Authentication middleware
const authenticate = (req, res, next) => {
  try {
    // 1. Get the token from the request headers
    const authHeader = req.headers.authorization;

    // 2. Check if a token was provided
    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    // 3. Extract the actual token
    const token = authHeader.split(" ")[1];

    // 4. Verify the token
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // 5. Attach the user's information to the request
    req.user = decodedToken;

    // 6. Allow the user to continue
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

// Export the middleware
module.exports = authenticate;
