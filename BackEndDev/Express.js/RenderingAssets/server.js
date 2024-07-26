const express = require("express");
const app = express();
const PORT = 8082;
const path = require("path");

//!sserve the static

app.use(express.static(path.join(__dirname, "public")));

// console.log(__dirname);

//Render Home route

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

//Render about page

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

//conact page

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

//GAllery

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "gallery.html"));
});

//!start trheserver

app.listen(PORT, console.log(`server is running at ${PORT}`));
