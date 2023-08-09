const { Router } = require('express');

const borrowerController = require('../controllers/borrower.controller');

const borrowerRouter = Router();

borrowerRouter.get("/borrowers", borrowerController.getBorrowers);
borrowerRouter.get("/borrowers/find/:query", borrowerController.findBorrowers);
borrowerRouter.get("/borrower", borrowerController.getBorrower);
borrowerRouter.get("/borrower/id/:id", borrowerController.getBorrowerById);
borrowerRouter.put("/borrower", borrowerController.updateBorrower);
borrowerRouter.delete("/borrower/id/:id", borrowerController.deleteBorrower);

module.exports = borrowerRouter;