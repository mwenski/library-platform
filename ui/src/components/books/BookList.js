import React from "react";
import { Link } from "react-router-dom";

function BookList(props){

    return(
        <table>
            {
                props.books.map(book => {
                    return(
                        <tr>
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
                        </tr>
                    );
                })
            }
        </table>
    );
}

export default BookList;