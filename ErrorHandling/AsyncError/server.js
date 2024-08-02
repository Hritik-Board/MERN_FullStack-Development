const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3002;

//simulate in the middlware
app.use((req, res, next) => {
  //! simlute an error cond
  const isError = true;

  try {
    if (isError) {
      throw new Error("Sync error occ");
    }
  } catch (error) {
    console.log(error);
  }
});

//regular route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to built in error handler",
  });
});

//Custom error handling middlwaye

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(error.status || 500);
  res.json({
    message: "something happened",
  });
});

//start the serber
app.listen(PORT, console.log("Server is up"));
