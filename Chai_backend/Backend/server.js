// const express = require('express')  (this is common js) or you can use the lower one
import express from "express"; // (this is module js) so you have to write ("type" : "module") in json file

const app = express();
/*
app.get("/", (req, res) => {
  res.send("server is ready");
});
*/
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A 1st joke",
      content: "this is the 1st joke",
    },
    {
      id: 2,
      title: "A 2nd joke",
      content: "this is the 2nd joke",
    },
    {
      id: 3,
      title: "A 3rd joke",
      content: "this is the 3rd joke",
    },
    {
      id: 4,
      title: "A 4th joke",
      content: "this is the 4th joke",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost: ${port}`);
});
