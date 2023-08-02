const jwt = require('jsonwebtoken');

class AuthMiddleware{
    checkAuthenticated = (req, res, next) => {
        const token = req.headers['authorization'];

        if(!token){
            return res.status(401).json({
                data: null,
                message: "No token provided. Authorisation denied"
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
}

module.exports = new AuthMiddleware();