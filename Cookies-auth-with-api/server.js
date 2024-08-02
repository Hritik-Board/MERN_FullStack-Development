const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Simulated users
const users = [
  { username: "John", password: "123", role: "admin" },
  { username: "Sarah", password: "323", role: "user" },
];

// Home route
app.get("/", (req, res) => {
  res.json({ message: "welcome to home" });
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

  // If user is found, set the cookie and respond with success message
  if (userFound) {
    res.cookie("userData", JSON.stringify(userFound), {
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.json({ message: "login success" });
  } else {
    // If user is not found, respond with login failed message
    res.json({ message: "login failed" });
  }
});

// Dashboard route
app.get("/dashboard", (req, res) => {
  // Get the user data from the cookie
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;

  if (userData) {
    res.json({
      message: `Welcome ${userData.username}. role: ${userData.role}`,
    });
  } else {
    res.json({ message: "Unauthorized, please login first" });
  }
});

// Logout route
app.post("/logout", (req, res) => {
  res.clearCookie("userData");
  res.json({ message: "logged out successfully" });
});

// Start the server
app.listen(3001, () => {
  console.log(`Server started`);
});
