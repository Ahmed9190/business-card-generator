const jwt = require("jsonwebtoken");

function verifyHeaders(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader;
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403); //forbidden
  }
}

function verifyToken(req, res, next) {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) res.sendStatus(403);
    //forbidden
    else {
      req.authData = authData;
      next();
    }
  });
}

module.exports = { verifyHeaders, verifyToken };
