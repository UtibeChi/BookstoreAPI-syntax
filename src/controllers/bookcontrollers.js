const Book = require("../model/bookModel")

// create a new book

const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json({
            message: "Book created successfully",
            book
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get one book by id

const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: "Book found", book });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get all books

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();    
        res.json({ message: "Books found", books });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



//update : change a books information
 
const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: "Book updated", book });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


//delete a book
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: "Book deleted", book });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    createBook,
    getBook,
    getAllBooks,
    updateBook,
    deleteBook
};

