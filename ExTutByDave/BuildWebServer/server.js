const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
// creating a port
const PORT = process.env.PORT || 3500;

// custom middleware logger

/*
app.use((req, res, next) => {
  logEvents(
    `${req.method} \t ${req.headers.origin} \t ${req.url}`,
    "reqLog.txt"
  );
  console.log(`${req.method} , ${req.path}`);
  next();
});           
*/
app.use(logger);

//  Cross Origin Resource Shairing    // (for cors error in google console)
app.use(cors());

// built-in middleware to handle urlencoded data
// in other words form data
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

// built-in middleware for JSON
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
  // res.send("hello world");
  // res.sendFile("./view/index.html", { root: __dirname });    (we do this in node)
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html"); // 302 by default
});

//  route handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next();
  },
  (req, res) => {
    res.send("hello world");
  }
);

//Chaining route handlers

const one = (req, res, next) => {
  console.log("one");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};
const three = (req, res) => {
  console.log("three");
  res.send("finished !");
};

app.get("/chain(.html)?", [one, two, three]);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
});

app.listen(PORT, () => console.log(`Server is working on port ${PORT}`));
