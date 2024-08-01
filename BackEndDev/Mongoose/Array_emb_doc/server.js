const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8082;

// const mongodbURL =
//   "mongodb+srv://twentekghana:xWzu0Yn69lU7yU9K@mongodb-basics.8pldozv.mongodb.net/?retryWrites=true&w=majority";
const mongodbURL =
  "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/students2-database";

//! 1. Connect to mongodb using mongoose
const connectToDB = async () => {
  try {
    await mongoose.connect(mongodbURL);
    console.log("Mongodb has been connected successfully");
  } catch (error) {
    console.log(`Error connecting to mongodb ${error}`);
  }
};
connectToDB();
//Students schema
const studentsSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    state: String,
    grade: String,
  },
  {
    timestamps: true,
  }
);
//classroom schema
const classroomSchema = new mongoose.Schema(
  {
    className: String,
    students: [studentsSchema],
  },
  {
    timestamps: true,
  }
);

//!Models
const classRoom = mongoose.model("Classroom", classroomSchema);

const createClassRoom = async () => {
  try {
    //create the user
    const newClassRoom = await classRoom.create({
      className: "Math 101",
      students: [
        {
          name: "Alice",
          age: 20,
          grade: "A",
        },
        { name: "bob", age: 23, grade: "B" },
        { name: "John", age: 20, grade: "C" },
      ],
    });

    console.log(newClassRoom);
  } catch (error) {
    console.log(error);
  }
};

createClassRoom();
//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
