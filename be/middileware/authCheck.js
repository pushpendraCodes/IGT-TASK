const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;

const verifyToken = (req, res, next) => {
  console.warn("token",req.headers["authorization"]);
  let token = req.headers["authorization"];
  if (token) {
    token.split(" ")[1];
    console.log(token,"token1")
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        res.status(401).send({
          result: err,

        });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: "Unauthorized - No token provided" });
  }
};
module.exports = verifyToken;
