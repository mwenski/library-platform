import { Link } from "react-router-dom";
import { BsTrash, BsPencilSquare } from "react-icons/bs";

function BookRow(props){
    return(
        <div className="book-row">
            <div className="column">
                <img src={props.book.coverUrl} alt={props.book.coverUrl}/>
            </div>
            <div className="column">
                <div className="row">
                    <h1>{props.book.title}</h1>
                    <h2>{props.book.author}</h2>
                </div>
                <div className="row">
                    <h4>{props.book.publisher}</h4>
                    <h4>{props.book.publicationYear}</h4>
                </div>
                <div className="row">
                    <Link to={{ pathname: `/book/${props.book.bookId}`}}>
                        <button title="Read more about the book" className="button-library">More</button>
                    </Link>
                    <Link to={{ pathname: `/update-book/${props.book.bookId}`}}>
                        <button title="Edit the book" className="button-edit"><BsPencilSquare /></button>
                    </Link>
                    <button type="button" title="Delete the book" className="button-delete" onClick={(e) => props.deleteBook(props.book.bookId)}><BsTrash /></button>
                </div>
            </div>
        </div>
    )
}

export default BookRow;