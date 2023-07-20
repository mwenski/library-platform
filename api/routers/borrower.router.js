const { Router } = require('express');

const borrowerController = require('../controllers/borrower.controller');

const borrowerRouter = Router();

borrowerRouter.get("/borrowers", (req, res) => {
    borrowerController.getBorrowers().then(data => res.json(data));
});

borrowerRouter.post("/borrower", (req, res) => {
    borrowerController.createBorrower(req.body.borrower).then(data => res.json(data));
});

borrowerRouter.put("/borrower", (req, res) => {
    borrowerController.updateBorrower(req.body.borrower).then(data => res.json(data));
});

borrowerRouter.delete("/borrower/:id", (req, res) => {
    borrowerController.deleteBorrower(req.params.id).then(data => res.json(data));
});

module.exports = borrowerRouter;