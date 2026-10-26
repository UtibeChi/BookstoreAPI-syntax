const express = require("express");

const router = express.Router();

const {createBook, getBook, getAllBooks, updateBook, deleteBook} = require("../controllers/bookController");

// Create a book
router.post("/", createBook);

// Get all books
router.get("/", getBooks);

// Get one book
router.get("/:id", getBook);

// Update a book
router.patch("/:id", updateBook);

// Delete a book
router.delete("/:id", deleteBook);

module.exports = router;