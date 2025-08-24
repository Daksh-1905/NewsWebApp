const jwt = require("jsonwebtoken");

const loginMiddleware = (req, res, next) => {
  const token = req.rawHeaders[req.rawHeaders.indexOf("Authorization") + 1];
  if (!token) {
    res.status(401).json({ message: "Token is missing" });
  }

  const tokenParts = token.split(" ");
  if (tokenParts[0] !== "Bearer" || !tokenParts[1]) {
    return res.status(400).send("Invalid Token Format.");
  }

  const actualToken = tokenParts[1];

  try {
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = { loginMiddleware };
