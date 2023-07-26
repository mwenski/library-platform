import React from "react";
import { Link } from "react-router-dom";

function BookRow(props){
    return(
        <tr>
            <td>
                <Link to='/book/:id'>
                    {props.book.title}
                </Link>
            </td>
            <td>
                {props.book.author}
            </td>
            <td>
                {props.book.publicationYear}
            </td>
        </tr>
    );
}

export default BookRow;