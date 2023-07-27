import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { getAllBooks, deleteBook } from "../services/BookService";
import BookList from "./books/BookList";


function Home(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then(books => {
            setBooks(books);
        })
    }, []);

    function delBook(id){
        deleteBook(id).then(res => {
            console.log(res);
        })
    }

    return (
        <div>
            <Link to="/create-book">Add a book!</Link>
            <BookList books={books} deleteBook={delBook} />
        </div>
    );
}

export default Home;