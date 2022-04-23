const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/fundraisers', require('./routes/fundraisers'));
app.use('/api/v1/products', require('./routes/products'));
app.use('/api/v1/rewards', require('./routes/rewards'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
