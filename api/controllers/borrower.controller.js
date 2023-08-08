const borrowerService = require('../services/borrower.service');

class BorrowerController{
    async getBorrowers(req, res){
        try{
            const borrowers = await borrowerService.getBorrowers();
            res.status(200).json({
                message: "All borrowers found!",
                data: borrowers
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async getBorrower(req, res){
        try{
            const borrower = await borrowerService.getBorrower(req.body.borrower);
            res.status(200).json({
                message: "Borrower found!",
                data: borrower
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async getBorrowerById(req, res){        
        try{
            const borrower = await borrowerService.getBorrowerById(req.params.id);
            res.status(200).json({
                message: "Borrower found!",
                data: borrower
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async updateBorrower(req, res){
        try{
            const borrower = await borrowerService.updateBorrower(req.body.borrower);
            res.status(200).json({
                message: "Borrower updated!",
                data: borrower
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

    async deleteBorrower(req, res){
        try{
            const borrower = await borrowerService.deleteBorrower(req.params.id);
            res.status(200).json({
                message: "Borrower removed!",
                data: borrower
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            })
        };
    }

}

module.exports = new BorrowerController();