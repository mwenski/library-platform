const jwt = require('jsonwebtoken');
const borrowerService = require('../services/borrower.service');
const loanService = require('../services/loan.service');

class AuthMiddleware{
    checkAuthenticated = (req, res, next) => {
        const token = req.headers['authorization'];

        if(!token){
            return res.status(401).json({
                data: null,
                message: "No token provided. Authorization denied"
            });
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, tokenData) => {
            if(err){
                return res.status(401).json({
                    data: null,
                    message: "Invalid token provided"
                });
            }

            req.body.tokenData = tokenData;
            next();
        });
    }

    checkIfAdmin = async (req, res, next) => {
        try{
            const user = await borrowerService.getBorrower(req.body.tokenData);

            if(user.role === 'admin'){
                next();
            }else{
                return res.status(401).json({
                    data: null,
                    message: "Authorization denied"
                });
            }

        }catch(err){
            return res.status(401).json({
                data: null,
                message: "Error occurred"
            });
        }
    }

    checkIfAllowedForBorrowerAction = async (req, res, next) => {
        try{
            const user = await borrowerService.getBorrower(req.body.tokenData);
            const borrowerId = req.params.id ?? req.body.borrower.borrowerId;

            if(user.role === 'admin' || user.borrowerId === borrowerId){
                next();
            }else{
                return res.status(401).json({
                    data: null,
                    message: "Authorization denied"
                });
            }

        }catch(err){
            return res.status(401).json({
                data: null,
                message: "Error occurred"
            });
        }        
    }

    checkIfAllowedForLoanAction = async (req, res, next) => {
        try{
            const user = await borrowerService.getBorrower(req.body.tokenData);

            const loanId = req.params.id ?? req.body.loan.borrowerId;
            const loan = await loanService.getLoanById(loanId);

            if(user.role === 'admin' || user.borrowerId === loan.borrowerId){
                next();
            }else{
                return res.status(401).json({
                    data: null,
                    message: "Authorization denied"
                });
            }

        }catch(err){
            return res.status(401).json({
                data: null,
                message: "Error occurred"
            });
        }
    }
}

module.exports = new AuthMiddleware();