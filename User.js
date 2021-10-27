const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send("API User");
});

module.exports = app;
