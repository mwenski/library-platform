const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());

app.use(require('./routers/book.router'));
app.use(require('./routers/borrower.router'));
app.use(require('./routers/copy.router'));
app.use(require('./routers/loan.router'));

app.get('/', (req, res) => {
    res.send(`Server is working!`)
});

app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`)
})