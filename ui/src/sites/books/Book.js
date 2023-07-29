import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/BookService";
import { getCopiesByBookId, deleteCopy } from "../../services/CopyService";
import BookInfo from "../../components/books/BookInfo";
import CopyList from "../../components/copies/CopyList";
import CreateUpdateCopy from "../../components/copies/CreateUpdateCopy";

function Book(){
    const { id } = useParams();

    const [book, setBook] = useState({});
    useEffect(() => {
        getBookById(id).then(book => {
            setBook(book);
        });
    }, [id]);

    const [copies, setCopies] = useState([]);
    const [numberOfCopies, setNumberOfCopies] = useState([]);
    useEffect(() => {
        getCopiesByBookId(id).then(copies => {
            setCopies(copies);
        });
    }, [id, numberOfCopies]);

    function delCopy(id){
        deleteCopy(id).then(res => {
            setNumberOfCopies(numberOfCopies - 1);
        })
    }

    return (
        <div>
            <BookInfo book={book} />
            <CreateUpdateCopy bookId={book.bookId}/>
            <CopyList copies={copies} deleteCopy={delCopy}/>
        </div>
    );
}

export default Book;