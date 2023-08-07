const { Router } = require('express');

const copyController = require('../controllers/copy.controller');

const copyRouter = Router();

copyRouter.get("/copies", copyController.getCopies);
copyRouter.get("/copy/id/:id", copyController.getCopyById);
copyRouter.get("/copy/book/:id", copyController.getCopiesByBookId);
copyRouter.post("/copy", copyController.createCopy);
copyRouter.put("/copy", copyController.updateCopy);
copyRouter.delete("/copy/id/:id", copyController.deleteCopy);

module.exports = copyRouter;