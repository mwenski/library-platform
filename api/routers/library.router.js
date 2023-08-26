const { Router } = require('express');

const libraryController = require('../controllers/library.controller');

const libraryRouter = Router();

libraryRouter.post('/library/borrow-book', libraryController.borrowBook);
libraryRouter.post('/library/return-book', libraryController.returnBook);

module.exports = libraryRouter;