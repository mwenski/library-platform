import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/BookService";
import BookInfo from "../../components/books/BookInfo";
import CopyList from "../../components/copies/CopyList";
import CreateUpdateCopy from "../../components/copies/CreateUpdateCopy";

function BookInfoSite(){
    const { id } = useParams();

    const [book, setBook] = useState({});
    useEffect(() => {
        getBookById(id).then(res => {
            setBook(res.data);
        });
    }, [id]);

    return (
        <div>
            <BookInfo book={book} />
            <CopyList bookId={id} />
            <CreateUpdateCopy bookId={book.bookId} />
        </div>
    );
}

export default BookInfoSite;