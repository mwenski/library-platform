const loanService = require('../services/loan.service');

class LoanController{
    async getLoans(){

        return await loanService.getLoans();
    }

    async getLoanById(loanId){

        return await loanService.getLoanById(loanId);
    }

    async getLoansByBorrowerId(borrowerId){

        return await loanService.getLoansByBorrowerId(borrowerId);
    }

    async createLoan(loan){

        return await loanService.createLoan(loan);
    }

    async updateLoan(loan){

        return await loanService.updateLoan(loan);
    }

    async deleteLoan(loanId){

        return await loanService.deleteLoan(loanId);
    }

}

module.exports = new LoanController();