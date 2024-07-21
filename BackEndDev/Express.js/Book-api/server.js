const express = require("express");

const app = express();

const PORT = 8082;

//? Receiving incomeing data from the client config
app.use(express.json());

const books = [
  { id: "1", title: "The great Gatsby", author: "F.scott" },
  { id: "2", title: "The Moby Dic", author: "GR.scott" },
  { id: "3", title: "The MERN", author: "AWD.scott" },
];

//!Home Route

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to my first book API",
    data: "Mysynctech",
  });
});

//! fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "Request fetched successfully",
    data: books,
  });
});

//! fetching one book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === id);
  if (!bookFound) {
    return res.json({
      status: "failed",
      message: "Book not found",
    });
  }
  res.json({
    status: "success",
    message: "Request fetched successfully",
    data: bookFound,
  });
});

//! create a book
app.post("/books", (req, res) => {
  console.log(req.body);
  const newPost = req.body;

  books.push(newPost);
  res.json({
    status: "success",
    message: "RBook created successfully",
    data: books,
  });
});

//! start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
