import React from "react";
import { useParams } from "react-router-dom";
import BookInfo from "../../components/books/BookInfo";
import CopyList from "../../components/copies/CopyList";
import CreateUpdateCopy from "../../components/copies/CreateUpdateCopy";


const BookInfoSite = () => {
    const { id } = useParams(); 

    return (
        <div>
            <BookInfo bookId={id}/>
            <CopyList bookId={id} />
            <CreateUpdateCopy bookId={id} />
        </div>
    );
}

export default BookInfoSite;