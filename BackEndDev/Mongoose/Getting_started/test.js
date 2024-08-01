const mongoose = require("mongoose");
const express = require("express");

const port = 8000;

const app = express();

const url = "";

const connectToDB = async () => {
  try {
    await mongoose.connect(url);
    console.log();
  } catch (e) {}
};

const studenSchema = mongoose.Schema({

})

const Student = mongoose.model(studenSchema)