const loanService = require('../services/loan.service');

class LoanController{
    async getLoans(req, res){
        try{
            const loans = await loanService.getLoans();
            res.status(200).json({
                message: "Loans found!",
                data: loans
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async getLoanById(req, res){
        try{
            const loan = await loanService.getLoanById(req.params.id);
            res.status(200).json({
                message: "Loan found!",
                data: loan
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async getLoansByBorrowerId(req, res){
        try{
            const loans = await loanService.getLoansByBorrowerId(req.params.id);
            res.status(200).json({
                message: "Loans found!",
                data: loans
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async createLoan(req, res){
        try{
            const loan = await loanService.createLoan(req.body.loan);
            res.status(200).json({
                message: "Loan created!",
                data: loan
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async updateLoan(req, res){
        try{
            const loan = await loanService.updateLoan(req.body.loan);
            res.status(200).json({
                message: "Loan updated!",
                data: loan
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async deleteLoan(req, res){
        try{
            const loan = await loanService.deleteLoan(req.params.id);
            res.status(200).json({
                message: "Loan removed!",
                data: loan
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

}

module.exports = new LoanController();