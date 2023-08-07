const { Router } = require('express');

const loanController = require('../controllers/loan.controller');

const loanRouter = Router();

loanRouter.get("/loans", loanController.getLoans);
loanRouter.get("/loan/id/:id", loanController.getLoanById);
loanRouter.get("/loan/borrower/:id", loanController.getLoansByBorrowerId);
loanRouter.post("/loan", loanController.createLoan);
loanRouter.put("/loan", loanController.updateLoan);
loanRouter.delete("/loan/id/:id", loanController.deleteLoan);

module.exports = loanRouter;