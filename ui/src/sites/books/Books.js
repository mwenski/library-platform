import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks, deleteBook } from "../../services/BookService";
import BookList from "../../components/books/BookList";


function Books(){
    const [books, setBooks] = useState([]);
    const [numberOfBooks, setNumberOfBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then(res => {
            setBooks(res.data);
        })
    }, [numberOfBooks]);

    function delBook(id){
        deleteBook(id).then(res => {
            console.log(res);
            setNumberOfBooks(numberOfBooks - 1);
        })
    }

    return (
        <div>
            <Link to="/create-book">Add a book!</Link>
            <BookList books={books} deleteBook={delBook} />
        </div>
    );
}

export default Books;