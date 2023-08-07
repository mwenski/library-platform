const loanService = require('../services/loan.service');
const copyService = require('../services/copy.service');

class LibraryController{

    async borrowBook(req, res){
        const { loan, copy } = req.body;
        const checkCopy = await copyService.getCopyById(copy.copyId);
        if(checkCopy.loanStatus === "borrowed"){
            return res.status(401).json({
                message: "Book already borrowed",
                data: null
            })
        }

        try{
            const newLoan = await loanService.createLoan(loan);
            await copyService.updateCopy(copy);
            res.status(200).json({
                message: "You've borrowed a book!",
                data: newLoan
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            });
        };
    }

    async returnBook(req, res){
        try{
            const loan = await loanService.createLoan(req.body.loan);
            await copyService.updateCopy(req.body.copy);
            res.status(200).json({
                message: "You've returned a book!",
                data: loan
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            });
        };
    }
}

module.exports = new LibraryController();