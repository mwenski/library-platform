import React from "react";
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
                                    <button type="button" onClick={(e) => props.deleteBook(book.bookId)}>Delete</button>
                                </td>
                                <td>
                                    <Link to={{ pathname: `/update-book/${book.bookId}`}}>Edit</Link>
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