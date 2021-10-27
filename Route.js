const express = require("express");
const app = express();

const userRoute = require("./User");

app.use(userRoute);

module.exports = app;
