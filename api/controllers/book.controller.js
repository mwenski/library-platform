const bookService = require('../services/book.service');
//pipe?

class BookController{
    async getBooks(){

        return await bookService.getBooks();
    }

    async createBook(book){

        return await bookService.createBook(book);
    }

    async updateBook(book){

        return await bookService.updateBook(book);
    }

    async deleteBook(bookId){

        return await bookService.deleteBook(book);
    }

}

module.exports = new BookController();