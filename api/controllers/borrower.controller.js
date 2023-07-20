const borrowerService = require('../services/borrower.service');

class BorrowerController{
    async getBorrowers(){

        return await borrowerService.getBorrowers();
    }

    async createBorrower(borrower){

        return await borrowerService.createBorrower(borrower);
    }

    async updateBorrower(borrower){

        return await borrowerService.updateBorrower(borrower);
    }

    async deleteBorrower(borrowerId){

        return await borrowerService.deleteBorrower(borrowerId);
    }

}

module.exports = new BorrowerController();