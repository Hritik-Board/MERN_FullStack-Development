const express = require("express");
const userRouter = require("./routes/usersRouter");
const mongoose = require("mongoose");

const app = express();

//! DB connection
mongoose
  .connect(
    "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/Mern-expenses"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });

//!Middleware
app.use(express.json()); //? pass incoming json data

//!Routes

app.use("/", userRouter);

//! Start the server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is running on the port...");
});
