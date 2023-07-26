import React from "react";

function BookInfo({ props }){
    return (
        <div>
            <h1>
                {props.book.title}
            </h1>
            <img src={props.book.coverUrl} alt="" />
            <h2>
                {props.book.author}
            </h2>
            <h3>
                {props.book.publisher}
            </h3>
            <h3>
                {props.book.publicationYear}
            </h3>
            <h4>
                {props.book.numberOfPages}
            </h4>
            <h5>
                {props.book.isbn}
            </h5>
            <p>
                {props.book.description}
            </p>
        </div>
    );
}

export default BookInfo;