const { Router } = require('express');

const bookController = require('./controllers/book.controller');

const bookRouter = Router();

bookRouter.get("/api/books", (req, res) => {
    bookController.getBooks().then(data => res.json(data));
});

bookRouter.post("/api/book", (req, res) => {
    bookController.createBook(req.body.book).then(data => res.json(data));
});

bookRouter.put("/api/book", (req, res) => {
    bookController.updateBook(req.body.book).then(data => res.json(data));
});

bookRouter.delete("/api/book/:id", (req, res) => {
    bookController.deleteBook(req.params.id).then(data => res.json(data));
});

module.exports = bookRouter;