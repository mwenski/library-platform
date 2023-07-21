const loanRepository = require('../repositories/loan.repository');

class LoanService{

    constructor(){}

    async getLoans(){
        return await loanRepository.getLoans();
    }

    async getLoanById(loanId){
        return await loanRepository.getLoanById(loanId);
    }

    async createLoan(loan){
        return await loanRepository.createLoan(loan);
    }

    async updateLoan(loan){
        return await loanRepository.updateLoan(loan);
    }

    async deleteLoan(loanId){
        return await loanRepository.deleteLoan(loanId);
    }

}

module.exports=new LoanService();