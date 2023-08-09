const bookService = require('../services/book.service');

class BookController{
    async getBooks(req, res){
        try{
            const books = await bookService.getBooks();
            res.status(200).json({
                message: "All books found!",
                data: books
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            });
        }
    }

    async findBooks(req, res){
        try{
            const books = await bookService.findBooks(req.params.query);
            res.status(200).json({
                message: "Books found!",
                data: books
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            });
        }
    }

    async getBookById(req, res){
        try{
            const book = await bookService.getBookById(req.params.id);
            res.status(200).json({
                message: "Book found!",
                data: book
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            });
        }
    }

    async createBook(req, res){
        try{
            const book = await bookService.createBook(req.body.book);
            res.status(200).json({
                message: "Book created!",
                data: book
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            });
        }
    }

    async updateBook(req, res){
        try{
            const book = await bookService.updateBook(req.body.book);
            res.status(200).json({
                message: "Book updated!",
                data: book
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            });
        }
    }

    async deleteBook(req, res){
        try{
            const book = await bookService.deleteBook(req.params.id);
            res.status(200).json({
                message: "Book removed!",
                data: book
            });
        }catch(err){
            res.status(401).json({
                message: "Error occured",
                data: null
            });
        }
    }

}

module.exports = new BookController();