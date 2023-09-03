import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookInfo from "../../components/books/BookInfo";
import CopyList from "../../components/copies/CopyList";
import CreateUpdateCopy from "../../components/copies/CreateUpdateCopy";
import { useDispatch } from "react-redux";
import { getBookAction } from "../../redux/actions/bookAction";
import { getCopiesAction } from "../../redux/actions/copyAction";

function BookInfoSite(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getBookAction(id)
        )
    }, [dispatch, id])

    useEffect(() => {
        dispatch(
            getCopiesAction(id)
        )
    }, [dispatch, id])

    return (
        <div>
            <BookInfo />
            <CopyList bookId={id} />
            <CreateUpdateCopy bookId={id} />
        </div>
    );
}

export default BookInfoSite;