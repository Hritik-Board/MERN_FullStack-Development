const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
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
const userProfileSchema = new mongoose.Schema(
  {
    age: {
      type: String,
      required: [true, "It is required"],
      validate: {
        validator: (value) => {
          return validator.isInt(value, { min: 0, max: 120 });
        },
        message: "Invalid Age",
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
        message: "Invalid email",
      },
    },
  },
  {
    timestamps: true,
  }
);

//? Compile the schema and form the model
const User = mongoose.model("User", userProfileSchema);

const createdoc = async () => {
  try {
    const userCreated = await User.create({
      username: "Hriteifnaef",
      age: 20,
      email: "hritik@gmail.com",
    });
    console.log(userCreated);
  } catch (e) {
    console.log(e);
  }
};

createdoc();
//start the server
app.listen(PORT, console.log(`Server running at ${PORT}`));
