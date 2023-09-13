const loanService = require('../services/loan.service');
const copyService = require('../services/copy.service');

class LibraryController{

    async borrowBook(req, res){
        const checkCopy = await copyService.getCopyById(req.body.loan.copyId);
        if(checkCopy.loanStatus === "borrowed"){
            return res.status(403).json({
                message: "Book already borrowed",
                data: null
            })
        }

        try{
            const newLoan = req.body.loan;
            newLoan.bookId = checkCopy.bookId;
            newLoan.dateBorrowed = new Date();
            newLoan.dueDate = new Date(new Date().setDate(new Date().getDate() + 30));
            newLoan.status = "borrowed";

            const updatedCopy = {
                copyId: req.body.loan.copyId,
                loanStatus: "borrowed"
            };

            const loan = await loanService.createLoan(newLoan);
            const copy = await copyService.updateCopy(updatedCopy);
            res.status(200).json({
                message: "You've borrowed the book!",
                data: {
                    loan: loan,
                    copy: copy
                }
            });
        }catch(err){
            res.status(500).json({
                message: "Internal error",
                data: null
            });
        };
    }

    async returnBook(req, res){
        try{
            const updatedLoan = req.body.loan;
            updatedLoan.dateReturned = new Date();
            updatedLoan.status = "returned";

            const updatedCopy = {
                copyId: req.body.loan.copyId,
                loanStatus: "available"
            }

            const loan = await loanService.updateLoan(updatedLoan);
            const copy = await copyService.updateCopy(updatedCopy);
            res.status(200).json({
                message: "You've returned the book!",
                data: {
                    loan: loan,
                    copy: copy
                }
            });
        }catch(err){
            res.status(500).json({
                message: "Internal error",
                data: null
            });
        };
    }
}

module.exports = new LibraryController();