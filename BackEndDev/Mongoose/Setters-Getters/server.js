const express = require("express");
const mongoose = require("mongoose");

const PORT = 5004;

// Instance of express
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
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    set: (value) => value.trim(),
  },
  author: {
    type: String,
    required: true,
    set: (value) => value.trim(),
  },
  price: {
    type: Number,
    required: true,
    set: (value) => Math.round(value * 100) / 100,
  },
  tags: {
    type: [String],
    required: true,
    set: (value) => value.map((tag) => tag.toLowerCase()),
  },
});

//? Compile the schema and form the model
const Book = mongoose.model("Book", bookSchema);

const createdoc = async () => {
  try {
    const bookCreated = await Book.create({
      title: "Mongoose for Everyone",
      author: "Hritik",
      price: 19.9999,
      tags: ["MONGODB", "FULL"],
    });
    console.log(bookCreated);
  } catch (e) {
    console.log(e);
  }
};

createdoc();

// Start the server
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
