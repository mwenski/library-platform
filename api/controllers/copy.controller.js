const copyService = require('../services/copy.service');

class CopyController{
    async getCopies(){

        return await copyService.getCopies();
    }

    async getCopyById(copyId){

        return await copyService.getCopyById(copyId);
    }

    async getCopiesByBookId(bookId){

        return await copyService.getCopiesByBookId(bookId);
    }

    async createCopy(copy){

        return await copyService.createCopy(copy);
    }

    async updateCopy(copy){

        return await copyService.updateCopy(copy);
    }

    async deleteCopy(copyId){

        return await copyService.deleteCopy(copyId);
    }

}

module.exports = new CopyController();