const express = require("express");
const ejsLayout = require("express-ejs-layouts");
const app = express();
const PORT = 8082;
const path = require("path");

//!sserve the static

app.use(express.static(path.join(__dirname, "public")));

//Set the view engine as ejs

app.set("view engine", "ejs");

//plugin the ejs layout as middleware

app.use(ejsLayout);
app.set("layout", "layout/main-layout");

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

//! 404 erroer handler

app.use((req, res, next) => {
  const error = new Error("Page not found");
  console.log(error);
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.send(err.message);
});

//!start trheserver

app.listen(PORT, console.log(`server is running at ${PORT}`));
