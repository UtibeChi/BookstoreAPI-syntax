// const express = require('express');

// const app = express();

// app.use(express.json());

// const books = [
//   {
//     id: 1,
//     title: 'Things Fall Apart',
//     author: 'Chinua Achebe',
//     price: 5000
//   }
// ];

// //GET all books

// app.get("/books", (req, res) => {
//   res.json(books);
// });

// //Get one book

// app.get("/books/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const book = books.find((book) => book.id === id);

//   if (!book) {
//     return res.status(404).json({ message: "Book not found" });
//   }
//   res.json(book);
// });

// //Create a new book
// app.post("/books", (req, res) => {
//   const newBook = {
//     id: books.length + 1,
//     title: req.body.title,
//     author: req.body.author,
//     price: req.body.price
//   };
//   books.push(newBook);
//   res.status(201).json(newBook);
// });


// //Update a book
// app.put("/books/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const book = books.find((book) => book.id === id);

//   if (!book) {
//     return res.status(404).json({ message: "Book not found" });
//   }

//   book.title = req.body.title;
//   book.author = req.body.author;
//   book.price = req.body.price;

//   res.json(book);
// });



// //delete a book

// app.delete("/books/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const index = books.findIndex((book) => book.id === id);

//   if (index === -1) {
//     return res.status(404).json({ message: "Book not found" });
//   }

//   books.splice(index, 1);
//   res.json({ message: "Book deleted" });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });