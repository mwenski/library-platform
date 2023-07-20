const { db } = require('../config/db.config');

class LoanRepository {

    constructor(){}

    async getLoans(){
        try{
            const loans = await db.loans.findAll();
            console.log("loans: ", loans);
            return loans;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async createLoan(loan){
        let data = {};

        try{
            data = await db.loans.create(loan);
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async updateLoan(loan){
        let data = {};

        try{
            data = await db.loans.update({...loan}, {
                where: {
                    loanId: loan.id
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async deleteLoan(loanId){
        let data = {}

        try{
            data = await db.loans.destroy({
                where: {
                    loanId: loanId
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }
}

module.exports = new LoanRepository();