import { Link } from "react-router-dom";

function BookList(props){
    return(
        <table>
            <tbody>
                {
                    props.books.map(book => {
                        return(
                            <tr key={book.bookId}>
                                <td>
                                    <Link to={{ pathname: `/book/${book.bookId}`}}>
                                        {book.title}
                                    </Link>
                                </td>
                                <td>
                                    {book.author}
                                </td>
                                <td>
                                    {book.publicationYear}
                                </td>
                                <td>
                                    <Link to={{ pathname: `/update-book/${book.bookId}`}}><button className="button-update">Edit</button></Link>
                                </td>
                                <td>
                                    <button type="button" className="button-delete" onClick={(e) => props.deleteBook(book.bookId)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default BookList;