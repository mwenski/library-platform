const copyRepository = require('../repositories/copy.repository');

class CopyService{

    constructor(){}

    async getCopies(){
        return await copyRepository.getCopies();
    }

    async getCopyById(copyId){
        return await copyRepository.getCopyById(copyId);
    }

    async getCopiesByBookId(bookId){
        return await copyRepository.getCopiesByBookId(bookId);
    }

    async createCopy(copy){
        return await copyRepository.createCopy(copy);
    }

    async updateCopy(copy){
        return await copyRepository.updateCopy(copy);
    }

    async deleteCopy(copyId){
        return await copyRepository.deleteCopy(copyId);
    }

}

module.exports=new CopyService();