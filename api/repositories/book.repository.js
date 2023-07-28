const { db } = require('../config/db.config');

class BookRepository {

    constructor(){}

    async getBooks(){
        try{
            const books = await db.books.findAll();
            console.log("books: ", books);
            return books;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async getBookById(bookId){
        try{
            const book = await db.books.findByPk(bookId);
            return book;
        }catch(err){
            console.log(err);
            return {};
        }
    }

    async createBook(book){
        let data = {};

        try{
            data = await db.books.create(book);
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async updateBook(book){
        let data = {};

        try{
            data = await db.books.update({...book}, {
                where: {
                    bookId: book.bookId
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async deleteBook(bookId){
        let data = {}

        try{
            data = await db.books.destroy({
                where: {
                    bookId: bookId
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }
}

module.exports = new BookRepository();