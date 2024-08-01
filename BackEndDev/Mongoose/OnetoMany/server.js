const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8083;

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
//comment schema
const commensSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);

const Comment = new mongoose.model("Comment", commensSchema);
//Blg post schema
const blogSchema = new mongoose.Schema(
  {
    title: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

//!Models
const blogPost = mongoose.model("blog", blogSchema);

// const createPost = async () => {
//   try {
//     const newDoc = await blogPost.create({ title: "Awaesome post" });
//     console.log(newDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createPost();

//!create comments

const createComment = async () => {
  try {
    //?find the post you want to commnet
    const postFound = await blogPost.findById("66ab28ae063cd7235e9edd48");
    console.log(postFound);
    //? create the c omment
    const newComment = await Comment.create({ text: "Awaesome amazinf guys" });
    console.log(newComment);
    //? push the comment
    postFound.comments.push(newComment._id);
    //? resave the post
    await postFound.save();
  } catch (e) {
    console.log(e);
  }
};

createComment();
//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
