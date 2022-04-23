const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express"),
  router = express.Router();
const db = require("better-sqlite3")("database.db");
const dotenv = require("dotenv");
dotenv.config();

router.post("/", async (req, res) => {
  let user = req.body;
  let rows = db
    .prepare(`SELECT * FROM users WHERE username = ?`)
    .all(req.body.username)[0];
  var PHash = bcrypt.hashSync(rows.password, 10);

  const result = await bcrypt.compare(req.body.password, rows.password);
  if (result) {
    // * CREATE JWT TOKEN
    const token = jwt.sign(
      {
        user_id: user.user_id,
        username: user.username,
        account_type: user.account_type,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2d", // 60s = 60 seconds - (60m = 60 minutes, 2h = 2 hours, 2d = 2 days)
      }
    );

    return res.status(200).send({ token: token });
  } else {
    return res.status(400).send("No Match");
  }
});

module.exports = router;
