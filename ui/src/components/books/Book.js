import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/BookService";
import BookInfo from "./BookInfo";
import CopyList from "../copies/CopyList";
import { getCopiesByBookId } from "../../services/CopyService";
import CreateCopy from "../copies/CreateCopy";

function Book(){
    const { id } = useParams();

    const [book, setBook] = useState({});
    useEffect(() => {
        getBookById(id).then(book => {
            setBook(book);
        });
    }, [id]);

    const [copies, setCopies] = useState([]);
    useEffect(() => {
        getCopiesByBookId(id).then(copies => {
            setCopies(copies);
        });
    }, [id]);

    return (
        <div>
            <BookInfo book={book} />
            <CreateCopy id={book.bookId}/>
            <CopyList copies={copies} />
        </div>
    );
}

export default Book;