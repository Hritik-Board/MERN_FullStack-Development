const express = require("express");

const app = express();

const PORT = 3001;

//simulate in the middlware
app.use((req, res, next) => {
  //! simlute an error cond
  const isError = true;
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
