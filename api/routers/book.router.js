const { Router } = require('express');

const bookController = require('../controllers/book.controller');

const bookRouter = Router();

bookRouter.get("/books", bookController.getBooks);
bookRouter.get("/book/id/:id", bookController.getBookById);
bookRouter.post("/book", bookController.createBook);
bookRouter.put("/book", bookController.updateBook);
bookRouter.delete("/book/id/:id", bookController.deleteBook);

module.exports = bookRouter;