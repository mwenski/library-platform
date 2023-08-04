const { db } = require('../config/db.config');

class BorrowerService{

    constructor(){}

    async getBorrowers(){
        try{
            const borrowers = await db.borrowers.findAll();
            console.log("borrowers: ", borrowers);
            return borrowers;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async getBorrower(email){
        let data = {};
        try{
            data = await db.borrowers.findOne({
                where: {
                    email: email
                },
            });
        }catch(err){
            console.log(err);
        }

        return data;
    }

    async getBorrowerById(borrowerId){
        try{
            const borrower = await db.borrowers.findByPk(borrowerId);
            return borrower;
        }catch(err){
            console.log(err);
            return {};
        }
    }

    async createBorrower(borrower){
        let data = {};

        try{
            data = await db.borrowers.create(borrower);
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async updateBorrower(borrower){
        let data = {};

        try{
            data = await db.borrowers.update({...borrower}, {
                where: {
                    borrowerId: borrower.borrowerId
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async deleteBorrower(borrowerId){
        let data = {}

        try{
            data = await db.borrowers.destroy({
                where: {
                    borrowerId: borrowerId
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }
}

module.exports = new BorrowerService();