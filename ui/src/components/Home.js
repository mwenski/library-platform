import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { getAllBooks } from "../services/BookService";
import BookList from "./books/BookList";


function Home(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then(books => {
            setBooks(books);
        })
    }, []);

    return (
        <div>
            <Link to="/create-book">Add a book!</Link>
            <BookList books={books} />
        </div>
    );
}

export default Home;