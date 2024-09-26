const express = require("express");
const app = express();

const routes = require("express").Router();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Maria Martinez");
});
app.get("/helaman", (req, res) => {
  res.send("Hello Helaman");
});

app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || port));
});
