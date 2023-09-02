import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/BookService";
import BookInfo from "../../components/books/BookInfo";
import CopyList from "../../components/copies/CopyList";
import CreateUpdateCopy from "../../components/copies/CreateUpdateCopy";
import { useDispatch } from "react-redux";
import { getBookAction } from "../../redux/actions/bookAction";

function BookInfoSite(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getBookAction(id)
        )
    }, [dispatch, id])

    const [book, setBook] = useState({});
    useEffect(() => {
        getBookById(id).then(res => {
            setBook(res.data);
        });
    }, [id]);

    return (
        <div>
            <BookInfo />
            <CopyList bookId={id} />
            <CreateUpdateCopy bookId={book.bookId} />
        </div>
    );
}

export default BookInfoSite;