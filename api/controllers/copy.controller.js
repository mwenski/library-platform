const copyService = require('../services/copy.service');

class CopyController{
    async getCopies(){

        return await copyService.getCopies();
    }

    async getCopyById(copyId){

        return await copyService.getCopyById(copyId);
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