const { Router } = require('express');

const bookController = require('../controllers/book.controller');

const bookRouter = Router();

bookRouter.get("/books", (req, res) => {
    bookController.getBooks().then(data => res.json(data));
});

bookRouter.get("/book/id/:id", (req, res) => {
    bookController.getBookById(req.params.id).then(data => res.json(data));
});

bookRouter.post("/book", (req, res) => {
    bookController.createBook(req.body.book).then(data => res.json(data));
});

bookRouter.put("/book", (req, res) => {
    bookController.updateBook(req.body.book).then(data => res.json(data));
});

bookRouter.delete("/book/id/:id", (req, res) => {
    bookController.deleteBook(req.params.id).then(data => res.json(data));
});

module.exports = bookRouter;