// ./index.js
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

app.listen(port, () => {
  console.log(`Express app hosted on Vercel listening at port ${port}`);
});
module.exports = app;
