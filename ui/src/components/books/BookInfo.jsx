function BookInfo({ book }){

    return (
        <div className="book-info">
            <img src={book.coverUrl} alt={book.coverUrl} />
            <div>
                <div className="row">
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                </div>
                <div className="row">
                    <div>
                        <h3>Published by: {book.publisher}</h3>
                        <h3>Year: {book.publicationYear}</h3>
                        <h3>Number of pages: {book.numberOfPages}</h3>
                        <h3>ISBN: {book.isbn}</h3>
                    </div>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    );
}

export default BookInfo;