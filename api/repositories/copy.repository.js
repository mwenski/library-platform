const { db } = require('../config/db.config');

class CopyRepository {

    constructor(){}

    async getCopies(){
        try{
            const copies = await db.copies.findAll();
            console.log("copies: ", copies);
            return copies;
        }catch(err){
            console.log(err);
            return [];
        }
    }
    
    async getCopyById(copyId){
        try{
            const copy = await db.copies.findByPk(copyId);
            return copy;
        }catch(err){
            console.log(err);
            return {};
        }
    }

    async createCopy(copy){
        let data = {};

        try{
            data = await db.copies.create(copy);
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async updateCopy(copy){
        let data = {};

        try{
            data = await db.copies.update({...copy}, {
                where: {
                    copyId: copy.id
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async deleteCopy(copyId){
        let data = {}

        try{
            data = await db.copies.destroy({
                where: {
                    copyId: copyId
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }
}

module.exports = new CopyRepository();