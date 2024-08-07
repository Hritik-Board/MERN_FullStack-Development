const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
//! Connect to mongodb
mongoose
  .connect(
    "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/students-database"
  )
  .then(() => console.log("Db connected successfully..."))
  .catch((e) => console.log(e));

//! Middlewares
app.use(express.json()); //pass incoming json data from the user
//Cors
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
//!Routes
app.use("/", router);
//!error handler
app.use(errorHandler);
//! Start the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is up and running`));
