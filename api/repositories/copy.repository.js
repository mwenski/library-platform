const { connect } = require('../config/db.config');

class CopyRepository {
    db = {};

    constructor(){
        this.db = connect();
        
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db");
        });
    }

    async getCopies(){
        try{
            const copies = await this.db.copies.findAll();
            console.log("copies: ", copies);
            return copies;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async createCopy(copy){
        let data = {};

        try{
            data = await this.db.copies.create(copy);
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async updateCopy(copy){
        let data = {};

        try{
            data = await this.db.copies.update({...copy}, {
                where: {
                    id: copy.id
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
            data = await this.db.copies.destroy({
                where: {
                    id: copyId
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }
}

module.exports = new CopyRepository();