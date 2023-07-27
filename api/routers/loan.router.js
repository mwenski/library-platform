const { Router } = require('express');

const loanController = require('../controllers/loan.controller');

const loanRouter = Router();

loanRouter.get("/loans", (req, res) => {
    loanController.getLoans().then(data => res.json(data));
});

loanRouter.get("/loan/id/:id", (req, res) => {
    loanController.getLoanById(req.params.id).then(data => res.json(data));
});

loanRouter.get("/loan/borrower/:id", (req, res) => {
    loanController.getLoansByBorrowerId(req.params.id).then(data => res.json(data));
});

loanRouter.post("/loan", (req, res) => {
    loanController.createLoan(req.body.loan).then(data => res.json(data));
});

loanRouter.put("/loan", (req, res) => {
    loanController.updateLoan(req.body.loan).then(data => res.json(data));
});

loanRouter.delete("/loan/id/:id", (req, res) => {
    loanController.deleteLoan(req.params.id).then(data => res.json(data));
});

module.exports = loanRouter;