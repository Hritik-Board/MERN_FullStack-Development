const express = require("express");

const app = express();

const PORT = 3000;

//simulate in the middlware
app.use((req, res, next) => {
  //! simlute an error cond
  const isError = false;
  if (isError) {
    //create an error object
    const error = new Error("An error accurent");
    next(error);
  } else {
    next();
  }
});

//regular route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to built in error handler",
  });
});

//start the serber
app.listen(PORT, console.log("Server is up"));
