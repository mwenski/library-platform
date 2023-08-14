const express = require('express');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

require('./config/auth.config')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routers/auth.router'));
app.use(require('./routers/book.router'));
app.use(require('./routers/borrower.router'));
app.use(require('./routers/copy.router'));
app.use(require('./routers/loan.router'));
app.use(require('./routers/library.router'));

app.get('/', (req, res) => {
    res.send(`Server is working!`)
});

app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`)
})