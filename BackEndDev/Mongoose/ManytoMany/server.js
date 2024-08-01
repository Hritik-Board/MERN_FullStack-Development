const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8085;

// const mongodbURL =
//   "mongodb+srv://twentekghana:xWzu0Yn69lU7yU9K@mongodb-basics.8pldozv.mongodb.net/?retryWrites=true&w=majority";
const mongodbURL =
  "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/Post-database";

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
//Courses schema
const CoursesSchema = new mongoose.Schema(
  {
    name: String,
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = new mongoose.model("Course", CoursesSchema);
//Student schema
const studentSchema = new mongoose.Schema(
  {
    name: String,
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  {
    timestamps: true,
  }
);

//!Models
const Student = mongoose.model("Student", studentSchema);

// const createCourse = async () => {
//   try {
//     const newCourses = await Course.create([
//       { name: "Math 101" },
//       { name: "DB 102" },
//     ]);
//     console.log(newCourses);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createCourse();

// const createStudents = async () => {
//   try {
//     const newStudent = await Student.create([
//       { name: "Alice" },
//       { name: "Emma" },
//     ]);
//     console.log(newStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createStudents();

//!students applying to the course

const applytoCourse = async () => {
  //?find the studnets
  const studentFound = await Student.findById("66ab2e1d500427ae1c691bdf");
  //?find the course

  const CouseFound = await Course.findById("66ab2d56f0acd6deb21d916f");
  //?after fingind update both

  //?push the course foound
  studentFound.enrolledCourses.push(CouseFound._id);

  CouseFound.enrolledStudents.push(studentFound._id);

  await CouseFound.save();
  await studentFound.save();
  console.log(CouseFound);
  console.log(studentFound);
};

applytoCourse();

//!create comments

// const createComment = async () => {
//   try {
//     //?find the post you want to commnet
//     const postFound = await blogPost.findById("66ab28ae063cd7235e9edd48");
//     console.log(postFound);
//     //? create the c omment
//     const newComment = await Comment.create({ text: "Awaesome amazinf guys" });
//     console.log(newComment);
//     //? push the comment
//     postFound.comments.push(newComment._id);
//     //? resave the post
//     await postFound.save();
//   } catch (e) {
//     console.log(e);
//   }
// };

// createComment();
//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
