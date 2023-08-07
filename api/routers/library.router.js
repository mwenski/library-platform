const { Router } = require('express');

const libraryController = require('../controllers/library.controller');

const libraryRouter = Router();

libraryRouter.post('/borrow-book', libraryController.borrowBook);
libraryRouter.post('/return-book', libraryController.returnBook);

module.exports = libraryRouter;