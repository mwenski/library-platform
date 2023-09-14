const loanService = require('../services/loan.service');
const copyService = require('../services/copy.service');

class LibraryController{

    async borrowBook(req, res){
        const { loan } = req.body;
        let updatedCopy;

        const checkCopy = await copyService.getCopyById(loan.copyId);
        if(checkCopy.loanStatus === "borrowed"){
            return res.status(403).json({
                message: "Book already borrowed",
                data: null
            })
        }

        try{
            loan.bookId = checkCopy.bookId;
            loan.dateBorrowed = new Date();
            loan.dueDate = new Date(new Date().setDate(new Date().getDate() + 30));
            loan.status = "borrowed";

            const copy = {
                copyId: loan.copyId,
                loanStatus: "borrowed"
            };

            const newLoan = await loanService.createLoan(loan)
            .then(
                updatedCopy = await copyService.updateCopy(copy)
            );
            
            res.status(200).json({
                message: "You've borrowed the book!",
                data: {
                    loan: newLoan,
                    copy: updatedCopy
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
        const { loan } = req.body;
        let updatedCopy;

        try{
            loan.dateReturned = new Date();
            loan.status = "returned";

            const copy = {
                copyId: loan.copyId,
                loanStatus: "available"
            }

            const updatedLoan = await loanService.updateLoan(loan)
            .then(
                updatedCopy = await copyService.updateCopy(copy)
            );
            
            res.status(200).json({
                message: "You've returned the book!",
                data: {
                    loan: updatedLoan,
                    copy: updatedCopy
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