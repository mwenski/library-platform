import React, { useState, useEffect } from "react";
import '../App.css';
import { getAllBooks } from "../services/BookService";

function Home(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then(books => {
            setBooks(books);
        })
    }, []);

    return (
        <p>
            {books}
        </p>
    );
}

export default Home;