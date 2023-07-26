import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { getAllBooks } from "../services/BookService";
import BookRow from "./books/BookRow";


function Home(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then(books => {
            setBooks(books);
        })
    }, []);

    return (
        <div>
            <Link to="/createBook">Add a book!</Link>
            <table>
                {
                    books.map(book => <BookRow book={book} />)
                }
            </table>
        </div>
    );
}

export default Home;