const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return res.status(401).json({ message: "Access Denied" });

  // REMOVING THE BEARER FRON TOKEN
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log(token);

    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
    console.log(token);
  }
};
