const express = require("express");
const app = express();
const PORT = 8082;
const path = require("path");

//!sserve the static

app.use(express.static(path.join(__dirname, "public")));

//Set the view engine as ejs

app.set("view engine", "ejs");

// console.log(__dirname);

//Render Home route

app.get("/", (req, res) => {
  res.render("home.ejs");
});

//Render about page

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

//conact page

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

//GAllery

app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});

//user Data

app.get("/users", (req, res) => {
  //dummy user data

  const userData = {
    username: "Alice",
    age: 25,
    isPrem: false,
    email: "alice@gmail.com",
  };
  res.render("userData.ejs", userData);
});

//!start trheserver

app.listen(PORT, console.log(`server is running at ${PORT}`));
