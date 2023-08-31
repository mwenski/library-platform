import BookRow from "./BookRow";
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from "../../redux/actions/bookAction";
import { useEffect } from "react";

function BookList(){
    const dispatch = useDispatch();
    const booksData = useSelector(state => state.book.books);

    useEffect(() => {
        dispatch(
            getBooksAction()
        );
    }, [dispatch]);

    return(
        booksData.map(book => 
            <BookRow book={book} 
            key={book.bookId} />
        )
    );
}

export default BookList;