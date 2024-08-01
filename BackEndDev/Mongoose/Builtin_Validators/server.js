const express = require("express");
const mongoose = require("mongoose");
const PORT = 5004;

//Instance of express
const app = express();

const Url =
  "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/students-database";

const connectoDB = async () => {
  try {
    await mongoose.connect(Url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error connecting ${error}`);
  }
};

connectoDB();

//! Design Schema
const userProfileSchema = new mongoose.Schema({
  user: String,
  age: Number,
  birthday: Date,
  isActive: Boolean,
  hobbies: [String],
  objectId: mongoose.Schema.Types.ObjectId, //Object Id,
  address: {
    street: String,
    city: String,
    postCode: Number,
  },
  customData: mongoose.Schema.Types.Mixed,
});

//? Compile the schema and form the model
const User = mongoose.model("User", userProfileSchema);
//start the server
app.listen(PORT, console.log(`Server running at ${PORT}`));
