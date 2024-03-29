const { db } = require('../config/db.config');

class BorrowerService{

    constructor(){}

    async getBorrowers(){
        try{
            const borrowers = await db.borrowers.findAll();
            return borrowers;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async findBorrowers(query){
        const Op = db.Sequelize.Op;
        try{
            const borrowers = await db.borrowers.findAll({
                where: {
                    [Op.or]: [
                        { firstName: { [Op.iLike]: `%${query}%` } },
                        { lastName: { [Op.iLike]: `%${query}%` } },
                        { address: { [Op.iLike]: `%${query}%` } },
                        { phoneNumber: { [Op.iLike]: `%${query}%` } },
                        { email: { [Op.iLike]: `%${query}%` } }
                    ]
                }
            });
            return borrowers;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async getBorrower(borrower){
        let data = {};
        try{
            data = await db.borrowers.findOne({
                where: borrower,
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