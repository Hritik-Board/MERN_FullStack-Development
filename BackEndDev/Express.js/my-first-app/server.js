const express = require("express");

//!instace

const app = express();

// console.log(app);

//! create the PORT

const port = 8082;

//!Define the route handler

app.get("/", (req, res) => {
  res.send("Hello world");
});

//!start the server

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
