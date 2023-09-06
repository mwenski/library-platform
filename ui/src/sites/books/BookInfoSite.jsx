import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookInfo from "../../components/books/BookInfo";
import CopyList from "../../components/copies/CopyList";
import CreateUpdateCopy from "../../components/copies/CreateUpdateCopy";
import { useDispatch } from "react-redux";
import { getCopiesAction } from "../../redux/actions/copyAction";

function BookInfoSite(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getCopiesAction(id)
        )
    }, [dispatch, id])

    return (
        <div>
            <BookInfo bookId={id}/>
            <CopyList bookId={id} />
            <CreateUpdateCopy bookId={id} />
        </div>
    );
}

export default BookInfoSite;