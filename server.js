const express = require("express");
const async = require("async");
const request = require("request");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.status(200).json({
    name: "Halooo",
    NickName: "Wutt"
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
