const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.headers.authorization;
    console.log("$$$", token);
    if (token) {
      token = token.slice(7);
      verify(token, "test123", (error, decoded) => {
        if (error) {
          res.status(403).json({
            success: 0,
            message: "Invalid token",
          });
        } else {
          console.log(decoded);
          next();
        }
      });
    } else {
      res.status(403).json({
        success: 0,
        message: "Access denied , unauthorized user",
      });
    }
  },
};
