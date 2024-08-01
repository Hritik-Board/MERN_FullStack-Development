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

//!CRUD Operations
//?Creation

//!save
const newUser = new User({
  user: "Hritik",
  age: 23,
  birthday: new Date("2002-12-3"),
  isActive: true,
  hobbies: ["Soccer", "Write", "Coding"],
  address: {
    street: "789 OAK tree",
    city: "Tomaso",
    postCode: 453212,
  },
  customData: {
    country: "Ghana",
  },
});

// newUser
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
//!create

// User.create({
//   user: "Emma",
//   age: 23,
//   birthday: new Date("2002-12-3"),
//   isActive: true,
//   hobbies: ["Soccer", "Write", "Coding"],
//   address: {
//     street: "789 OAK tree",
//     city: "Tomaso",
//     postCode: 453212,
//   },
//   customData: {
//     country: "Ghana",
//   },
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
//!insertMany

// User.insertMany([
//   {
//     user: "prince",
//     age: 23,
//     birthday: new Date("2002-12-3"),
//     isActive: true,
//     hobbies: ["Soccer", "Write", "Coding"],
//     address: {
//       street: "789 OAK tree",
//       city: "Tomaso",
//       postCode: 453212,
//     },
//     customData: {
//       country: "Ghana",
//     },
//   },
//   {
//     user: "Charles",
//     age: 23,
//     birthday: new Date("2002-12-3"),
//     isActive: true,
//     hobbies: ["Soccer", "Write", "Coding"],
//     address: {
//       street: "789 OAK tree",
//       city: "Tomaso",
//       postCode: 453212,
//     },
//     customData: {
//       country: "Ghana",
//     },
//   },
// ])
// .then((data) => {
//   console.log(data);
// })
// .catch((e) => {
//   console.log(e);
// });

//!READ OPERATIONS
//!Find
// User.find()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//!findone
// User.findOne({
//   user: "Emma",
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//!findbyID
// User.findById("66aaecde2d2810c4ff828467")
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//!Where
// const findUsers = async () => {
//   try {
//     const users = await User.find().where("user").equals("Charles");
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };

// findUsers();
//!Sort
// const findUsers = async () => {
//   try {
//     const users = await User.find()
//       .where("age")
//       .equals("23")
//       .sort({ user: +1 });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//!limit
// const findUsers = async () => {
//   try {
//     const users = await User.find()
//       .where("age")
//       .equals("23")
//       .sort({ user: +1 })
//       .limit(1);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };

//!Update Documents
//!updateone
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.updateOne(
//       { user: "Hritik" },
//       { isActive: false },
//       { new: true }
//     );
//     console.log(updatedDoc);
//   } catch (e) {
//     console.log(e);
//   }
// };

// updateDoc();
//!findbyIdandUpdate
//!findOneandUpdate

//!Update operators
//!set and unset

// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.findOneAndUpdate(
//       { user: "Hritik" },
//       { $set: { age: 98 } },
//       { new: true }
//     );
//     console.log(updatedDoc);
//   } catch (e) {
//     console.log(e);
//   }
// };

// updateDoc();

//!addtoSet push
//   try {
//     const updatedDoc = await User.findOneAndUpdate(
//       { user: "Hritik" },
//       // { $addToSet: { hobbies: "Screaming"
//       { $push: { hobbies: "teaing" } },
//       { new: true }
//     );
//     console.log(updatedDoc);
//   } catch (e) {
//     console.log(e);
//   }
// };

// updateDoc();

const Deletedoc = async () => {
  try {
    const DeleteDoc = await User.findByIdAndDelete("66aaeb53e14537ca1bba5252");
    console.log(DeleteDoc);
  } catch (e) {
    console.log(e);
  }
};

Deletedoc();

// findUsers();
//start the server
app.listen(PORT, console.log(`Server running at ${PORT}`));
