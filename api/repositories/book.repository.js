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

    async createBook(book){
        let data = {};

        try{
            // book.createdate = new Date().toISOString();
            data = await db.books.create(book);
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async updateBook(book){
        let data = {};

        try{
            // book.updatedate = new Date().toISOString();
            data = await db.books.update({...book}, {
                where: {
                    bookId: book.id
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