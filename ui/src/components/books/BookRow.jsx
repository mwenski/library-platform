import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteBookAction } from "../../redux/actions/bookAction";
import { showSnackbarAction } from '../../redux/actions/globalNotificationAction';
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const BookRow = ({ book }) => {
    const dispatch = useDispatch();
    
    const deleteBook = () => {
        dispatch(
            deleteBookAction(
                book.bookId,
                () => dispatch(
                    showSnackbarAction('Book removed', 'success')
                ),
                () => dispatch(
                    showSnackbarAction('Cannot remove the book', 'error')
                )
            )
        );
    }

    const buttons = localStorage.getItem('borrowerData') ?
    (
        <div className="row">
            <Link to={{ pathname: `/book/${book.bookId}`}}>
                <button title="Read more about the book" 
                className="button-library">
                    More
                </button>
            </Link>
            <Link to={{ pathname: `/update-book/${book.bookId}`}}>
                <button title="Edit the book" 
                className="button-edit">
                    <BsPencilSquare />
                </button>
            </Link>
            <button type="button" 
            title="Delete the book" 
            className="button-delete" 
            onClick={(e) => deleteBook()}>
                <BsTrash />
            </button>
        </div>
    ):(
        <div className="row" />
    );

    const handleImgError = (e) => {
        e.target.onError = null;
        e.target.src = 'no-cover.jpg';
    }

    return(
        <div className="book-row"
        key={book.bookId} >
            <div className="column">
                <img src={book.coverUrl ?? 'no-cover.jpg'} 
                alt={book.coverUrl}
                onError={handleImgError} />
            </div>
            <div className="column">
                <div className="row">
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                </div>
                <div className="row">
                    <h4>{book.publisher}</h4>
                    <h4>{book.publicationYear}</h4>
                </div>
                { buttons }
            </div>
        </div>
    )
}

export default BookRow;