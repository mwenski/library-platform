const { connect } = require('../config/db.config');

class BookRepository {
    db = {};

    constructor(){
        this.db = connect();

        this.db.sequelize.sync().then(() => {
                console.log("DB is working!");
        });
    }

    async getBooks(){
        try{
            const books = await this.db.books.findAll();
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
            data = await this.db.books.create(book);
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }

    async updateBook(book){
        let data = {};

        try{
            // book.updatedate = new Date().toISOString();
            data = await this.db.books.update({...book}, {
                where: {
                    id: book.id
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
            data = await this.db.books.destroy({
                where: {
                    id: bookId
                }
            });
        }catch(err){
            console.log("Error: ", err);
        }

        return data;
    }
}

module.exports = new BookRepository();