import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookAction } from "../../redux/actions/bookAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";

const BookInfo = ({ bookId }) => {
    const dispatch = useDispatch();
    const { booksData } = useSelector(state => state.book);
    const book = booksData.find(book => book.bookId === parseInt(bookId));

    useEffect(() => {
        if(!book){
            dispatch(
                getBookAction(
                    bookId,
                    () => dispatch(
                        showSnackbarAction('Cannot find this book', 'error')
                    )
                )
            )
        }
    }, [dispatch, book, bookId])

    if(!book){
        return (
            <div className="no-data">
                <h1>Book not found</h1>
            </div>
        )
    }

    const handleImgError = (e) => {
        e.target.onError = null;
        e.target.src = '../no-cover.jpg';
    }

    return (
        <div className="book-info">
            <div className="column"> 
                <img src={book.coverUrl ?? '../no-cover.jpg'} 
                alt={book.coverUrl} 
                onError={handleImgError} />
            </div>
            <div className="column">
                <div className="row">
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                </div>
                <div className="row">
                    <table>
                        <tbody>
                            <tr>
                                <td><h4>Category:</h4></td>
                                <td><h4>{book.category}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Published by:</h4></td>
                                <td><h4>{book.publisher}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Year:</h4></td>
                                <td><h4>{book.publicationYear}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Number of pages:</h4></td>
                                <td><h4>{book.numberOfPages}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>ISBN:</h4></td>
                                <td><h4>{book.isbn}</h4></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    );
}

export default BookInfo;