import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/BookService";
import BookInfo from "./BookInfo";

function Book(){
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        getBookById(id).then(book => {
            setBook(book);
        });
    }, [id]);

    return (
        <div>
            <BookInfo book={book} />
            <p>Here will be copies</p>
        </div>
    );
}

export default Book;