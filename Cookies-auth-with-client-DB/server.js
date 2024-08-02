const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose
  .connect(
    "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/students2-database"
  )
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

// Create the schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

// Set the view engine
app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
  res.render("home");
});

// Login route
app.get("/login", (req, res) => {
  res.render("login");
});

// Register route
app.get("/register", (req, res) => {
  res.render("register");
});

// Register route logic
app.post("/register", async (req, res) => {
  try {
    // Destructure the body
    const { username, password } = req.body;

    // Debugging information
    console.log("Register request received:", username, password);

    // Check if user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      console.log("User already exists");
      return res.redirect("/register");
    }

    // Hash the password
    const hashedPass = await bcryptjs.hash(password, 10);

    // Create new user
    const newUser = new User({
      username: username,
      password: hashedPass,
    });

    await newUser.save();

    // Debugging information
    console.log("New user created:", newUser);

    // Redirect user to login
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering new user.");
  }
});

// Login route logic
app.post("/login", async (req, res) => {
  try {
    // Find the user login details
    const userFound = await User.findOne({ username: req.body.username });
    if (userFound) {
      // Compare the password
      const isMatch = await bcryptjs.compare(
        req.body.password,
        userFound.password
      );
      if (isMatch) {
        // If user is found and password matches, set the cookie and redirect to the dashboard
        res.cookie("userData", JSON.stringify(userFound), {
          maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
          httpOnly: true,
          secure: false,
          sameSite: "strict",
        });
        return res.redirect("/dashboard");
      }
    }
    // If user is not found or password doesn't match, redirect back to the login page
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in user.");
  }
});

// Dashboard route
app.get("/dashboard", (req, res) => {
  // Get the user data from the cookie
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;

  if (userData) {
    res.render("dashboard", { username: userData.username });
  } else {
    res.redirect("/login");
  }
});

// Logout route
app.post("/logout", (req, res) => {
  res.clearCookie("userData");
  res.redirect("/login");
});

// Start the server
app.listen(3001, () => {
  console.log(`Server started`);
});
