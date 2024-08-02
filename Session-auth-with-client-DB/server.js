const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();

// Connect to mongoose
mongoose
  .connect(
    "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/students2-database"
  )
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });

// Create the userSchema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

// Compile the schema to form model
const User = mongoose.model("User", userSchema);

//! Middlewares
app.use(express.urlencoded({ extended: true }));
//! Set the view engine
app.set("view engine", "ejs");

//----- CUSTOM MIDDLEWARES -----
//!-- isAuthenticated (Authentication)
const isAuthenticated = (req, res, next) => {
  // check the user in the session
  const username = req.session.userData ? req.session.userData.username : null;
  if (username) {
    return next();
  } else {
    res.redirect("/login");
  }
};

//!- isAdmin (Authorization)
const isAdmin = (req, res, next) => {
  // check the user in the session
  const admin = req?.session?.userData?.role === "admin";
  if (admin) {
    return next();
  } else {
    res.send("Forbidden, admin only");
  }
};

//!-- configure Express Session ---
app.use(
  session({
    secret: "gslef34343",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000, // expires in 1 hour
    },
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/students2-database",
    }),
  })
);

// Home Route
app.get("/", (req, res) => {
  console.log(req.session);
  res.render("home");
});

// Login Route (login form)
app.get("/login", (req, res) => {
  res.render("login");
});

// Admin Route (Admin page)
app.get("/admin-only", (req, res) => {
  res.render("admin");
});

// Register Route (register form)
app.get("/register", (req, res) => {
  res.render("register");
});

// Register Logic (register form)
app.post("/register", async (req, res) => {
  //! Destructure the req.body
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    username,
    password: hashedPassword,
  });
  // Redirect to login
  res.redirect("/login");
});

// Login Route logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //! Find the user in the db
  const userFound = await User.findOne({
    username,
  });
  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    //! Create session
    req.session.userData = {
      username: userFound.username,
      role: userFound.role,
    };

    //! Add the login user to session
    res.redirect("/dashboard");
  } else {
    res.send("Invalid login credentials");
  }
});

// Dashboard Route
app.get("/dashboard", isAuthenticated, isAdmin, (req, res) => {
  // Take the login user from session
  const username = req.session.userData ? req.session.userData.username : null;
  if (username) {
    res.render("dashboard", { username });
  } else {
    res.redirect("/login");
  }
});

// Logout Route
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

// Start the server
app.listen(3003, console.log("The server is running"));
