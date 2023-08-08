const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const borrowerService = require('../services/borrower.service');

passport.serializeUser((borrower, done) => done(null, borrower.borrowerId));

passport.deserializeUser((borrowerId, done) => {
    done(null, borrowerService.getBorrowerById(borrowerId))
});

function initialize(passport) {
    const authenticateBorrower = (email, password, done) => {
        borrowerService.getBorrower({email: email}).then(borrower => {
            if(!borrower){
                return done(null, false, "Invalid email/password");
            }else{
                bcrypt.compare(password, borrower.password, (err, isMatch) => {
                    if (err) throw err;

                    if(isMatch){
                        return done(null, borrower, { message: "Login successful" });
                    }else{
                        return done(null, false, { message: "Invalid email/password" });
                    }
                })
            }
        })
        .catch(err => done(null, false, { message: err }))
    }

    passport.use(
        new LocalStrategy(
            { usernameField: 'email', passwordField: 'password' },
            authenticateBorrower
        )
    );
}

module.exports = initialize;
