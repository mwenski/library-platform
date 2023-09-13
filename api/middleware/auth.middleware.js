const jwt = require('jsonwebtoken');
const borrowerService = require('../services/borrower.service');

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

    checkIfAllowed = async (req, res, next) => {
        try{
            const user = await borrowerService.getBorrower(req.body.tokenData);

            if(user.role === 'admin' || user.borrowerId === req.body.data.borrowerId){
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