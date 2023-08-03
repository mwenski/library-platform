const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const borrowerService = require('../services/borrower.service');

class AuthController{
    login(req, res, next){
        passport.authenticate('local', (err, borrower, message) => {
            if (err) throw err;

            if(!user){
                res.status(400).json({
                    message,
                    data: null
                });
            }else{
                let borrowerData = {
                    borrowerId: borrower.borrowerId,
                    email: borrower.email
                }

                const accessToken = jwt.sign(
                    { borrowerData },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '15m' }
                );
                const refreshToken = jwt.sign(
                    { borrowerData },
                    process.env.REFRESH_TOKEN_SECRET,
                    { expiresIn: '1d' }
                );

                res.status(200).json({
                    message,
                    data: {
                        accessToken,
                        refreshToken,
                        borrowerData
                    }
                });
            }
        })(req, res, next);
    }

    async register(req, res){
        borrower = req.body.borrower;
        try{
            borrower.password = bcrypt.hash(borrower.password, 10);
            await borrowerService.createBorrower(borrower);
            res.status(200).json({
                message: "Registration success!",
                data: null
            });
        }catch(err){
            res.status(401).json({
                message: "Registration failure!",
                data: null
            })
        }
    }

    refresh(req, res, next){
        const { refreshToken } = req.body;

        if(!refreshToken){
            res.status(400).json({
                message: "No refresh token provided",
                data: null
            });
        };

        jwt.verify(
            refreshToken, 
            process.env.REFRESH_TOKEN_SECRET, 
            (err, tokenData) => {
                if (err) throw err;

                const userData = tokenData.userData;
                const accessToken = jwt.sign(
                    { userData },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '15m' }
                );
                res.status(200).json({
                    data: accessToken
                });
            }
        );
    }
}

module.exports = new AuthController();