const express = require("express");

const router = express.Router();

const {createBook, getBook, getAllBooks, updateBook, deleteBook} = require("../controllers/bookcontrollers");

// Create a book
router.post("/create", createBook);

// Get all books
router.get("/all", getAllBooks);

// Get one book
router.get("/:id", getBook);

// Update a book
router.patch("/:id", updateBook);

// Delete a book
router.delete("/:id", deleteBook);

module.exports = router;