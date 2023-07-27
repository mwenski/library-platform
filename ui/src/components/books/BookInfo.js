import React from "react";

function BookInfo({ book }){

    return (
        <div>
            <h1>{book.title}</h1>
            <img src={book.coverUrl} alt={book.coverUrl} />
            <h2>{book.author}</h2>
            <h3>{book.publisher}</h3>
            <h3>{book.publicationYear}</h3>
            <h4>{book.numberOfPages}</h4>
            <h5>{book.isbn}</h5>
            <p>{book.description}</p>
        </div>
    );
}

export default BookInfo;