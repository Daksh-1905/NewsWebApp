const jwt = require("jsonwebtoken");

const loginMiddleware = (req, res, next) => {

  let token = req.cookies && req.cookies.access_token;

  if (!token && req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(" ");
    if (parts.length === 2 && parts[0] === "Bearer") {
      token = parts[1];
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log(req.cookies)
    next();
  } catch (error) {
    console.error("JWT verify error:", error.message || error);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = { loginMiddleware };
