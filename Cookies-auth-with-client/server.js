const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Set the view engine
app.set("view engine", "ejs");

// Simulated users
const users = [
  { username: "John", password: "123", role: "admin" },
  { username: "Sarah", password: "323", role: "user" },
];

// Home route
app.get("/", (req, res) => {
  res.render("home");
});

// Login route
app.get("/login", (req, res) => {
  res.render("login");
});

// Login route logic
app.post("/login", (req, res) => {
  // Find the user login details
  const userFound = users.find((user) => {
    return (
      user.username === req.body.username && user.password === req.body.password
    );
  });

  // If user is found, set the cookie and redirect to the dashboard
  if (userFound) {
    res.cookie("userData", JSON.stringify(userFound), {
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.redirect("/dashboard");
  } else {
    // If user is not found, redirect back to the login page
    res.redirect("/login");
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
