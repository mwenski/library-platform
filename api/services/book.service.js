const bookRepository = require('../repositories/book.repository');

class BookService{

    constructor(){}

    async getBooks(){
        return await bookRepository.getBooks();
    }

    async createBook(book){
        return await bookRepository.createBook(book);
    }

    async updateBook(book){
        return await bookRepository.updateBook(book);
    }

    async deleteBook(bookId){
        return await bookRepository.deleteBook(bookId);
    }

}

module.exports=new BookService();