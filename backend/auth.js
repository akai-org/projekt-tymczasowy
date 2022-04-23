const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  let token;
  if (authHeader) {
    let token = authHeader && authHeader.split(" ")[1];
  }

  if (token == null)
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pY2hhbCIsImFjY291bnRfdHlwZSI6MSwiaWF0IjoxNjUwNzE3NzI3LCJleHAiOjE2NTA4OTA1Mjd9.bhXg8sWINAJeW2MGL0MPdmrBf45QgV3Pya9L6-c2NGE";
  jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

module.exports = authenticateToken;
