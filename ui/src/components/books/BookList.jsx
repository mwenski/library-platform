import BookRow from "./BookRow";

function BookList({ books, deleteBook }){
    return(
        books.map(book => 
            <BookRow book={book} 
            deleteBook={deleteBook} 
            key={book.bookId} />
        )
    );
}

export default BookList;