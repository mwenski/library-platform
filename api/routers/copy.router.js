const { Router } = require('express');

const copyController = require('../controllers/copy.controller');

const copyRouter = Router();

copyRouter.get("/copies", (req, res) => {
    copyController.getCopies().then(data => res.json(data));
});

copyRouter.get("/copy/id/:id", (req, res) => {
    copyController.getCopyById(req.params.id).then(data => res.json(data));
});

copyRouter.get("/copy/book/:id", (req, res) => {
    copyController.getCopiesByBookId(req.params.id).then(data => res.json(data));
});

copyRouter.post("/copy", (req, res) => {
    copyController.createCopy(req.body.copy).then(data => res.json(data));
});

copyRouter.put("/copy", (req, res) => {
    copyController.updateCopy(req.body.copy).then(data => res.json(data));
});

copyRouter.delete("/copy/id/:id", (req, res) => {
    copyController.deleteCopy(req.params.id).then(data => res.json(data));
});

module.exports = copyRouter;