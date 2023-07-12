const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const bookController=require('./controllers/book.controller');

const app = express();

const PORT = process.env.PORT || 9000;

app.use(bodyParser.json);


app.get("/api/books", (req, res) => {
    bookController.getBooks().then(data => res.json(data));
});

app.post("/api/book", (req, res) => {
    bookController.createBook(req.body.book).then(data => res.json(data));
});

app.put("/api/book", (req, res) => {
    bookController.updateBook(req.body.book).then(data => res.json(data));
});

app.delete("/api/book/:id", (req, res) => {
    bookController.deleteBook(req.params.id).then(data => res.json(data));
});


app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.listen(PORT, () => {
    console.log(`Server listening on the port ${PORT}`);
});