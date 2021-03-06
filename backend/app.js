const express = require("express");
const app = express();
const port = 8000;
const BodyParser = require("body-parser");
const cors = require("cors");

app.use(BodyParser());

app.use(cors());
app.options("*", cors());

const auth = require("./auth");
app.get("/", auth, (req, res) => {
  console.log(req.user);
  res.send("Hello World!");
});

app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/fundraisers", require("./routes/fundraisers"));
app.use("/api/v1/products", require("./routes/products"));
app.use("/api/v1/rewards", require("./routes/rewards"));
app.use("/api/v1/declarations", require("./routes/declarations"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
