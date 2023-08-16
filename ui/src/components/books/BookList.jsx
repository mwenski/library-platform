import BookRow from "./BookRow";

function BookList(props){
    return(
        props.books.map(book => <BookRow book={book} deleteBook={props.deleteBook} key={book.bookId}/>)
    );
}

export default BookList;