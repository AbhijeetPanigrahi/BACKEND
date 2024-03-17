const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  // res.send("hello world");
  // res.sendFile("./view/index.html", { root: __dirname });    (we do this in node)
  res.sendFile(path.join(__dirname, "..", "view", "index.html"));
});

router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "new-page.html"));
});

router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html"); // 302 by default
});

module.exports = router;
