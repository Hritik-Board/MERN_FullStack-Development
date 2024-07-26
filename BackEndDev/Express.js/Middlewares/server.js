const express = require("express");

const app = express();

const PORT = 8082;

//serve static files

// app.use(express.static())

//!pass incoming data
app.use(express.json());
//! create a book

//!APp level middlewares

//Logging detauls of every request

app.use((req, res, next) => {
  console.log(req.body);
  console.log("Am an app middleware");
  next();
});
//Home route

app.get("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "welcome to this app",
  });
});

app.post("/books", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Built in middleware demo",
  });
});

//! start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
