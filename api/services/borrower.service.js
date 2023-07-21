const borrowerRepository = require('../repositories/borrower.repository');

class BorrowerService{

    constructor(){}

    async getBorrowers(){
        return await borrowerRepository.getBorrowers();
    }

    async getBorrowerById(borrowerId){
        return await borrowerRepository.getBorrowerById(borrowerId);
    }

    async createBorrower(borrower){
        return await borrowerRepository.createBorrower(borrower);
    }

    async updateBorrower(borrower){
        return await borrowerRepository.updateBorrower(borrower);
    }

    async deleteBorrower(borrowerId){
        return await borrowerRepository.deleteBorrower(borrowerId);
    }

}

module.exports=new BorrowerService();