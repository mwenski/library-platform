const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 9000;

app.use(bodyParser.json);

app.use(require('./routers/book.router'));
//app.use(require('./routers/copy.router'));

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.listen(PORT, () => {
    console.log(`Server listening on the port ${PORT}`);
});