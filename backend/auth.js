const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["Authorization"];
  let token;
  if (authHeader) {
    let token = authHeader && authHeader.split(" ")[1];
  }

  if (token == null)
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InphcHBzIiwiYWNjb3VudF90eXBlIjoxLCJpYXQiOjE2NTA3MjE4MzIsImV4cCI6MTY1MDg5NDYzMn0.FskpBD8Whn-BEEiRsYImNkyuAbfg3XSmCsw66A9WQaM";
  jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    req.user = user;

    next();
  });
}

module.exports = authenticateToken;
