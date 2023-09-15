import React, { useState, useEffect } from "react";
import "../../styles/BookListSite.css";
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction, searchBooksAction } from "../../redux/actions/bookAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";
import SearchBook from "../../components/global/SearchBar";
import PaginationNav from "../../components/global/PaginationNav";
import BookRow from "../../components/books/BookRow";
import { AddBookButton } from "../../components/global/CreateButtons";

const BookListSite = () => {
    const dispatch = useDispatch();
    const { booksData, searchQuery } = useSelector(state => state.book);
    const [query, setQuery] = useState(searchQuery);

    useEffect(() => {
        if(query !== ""){
            dispatch(
                searchBooksAction(
                    query,
                    () => dispatch(
                        showSnackbarAction('Cannot find these books', 'error')
                    )
                )
            );
        }else{
            dispatch(
                getBooksAction(
                    () => dispatch(
                        showSnackbarAction('Cannot find any book', 'error')
                    )
                )
            );
        }
    }, [dispatch, query]);

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;

    if(booksData.length === 0){
        return(
            <div>
                <SearchBook searchFunction={setQuery} />

                <div className="no-data">
                    <h1>Books not found</h1>
                </div>

                <AddBookButton />
            </div>
        )
    }

    return (
        <div>
            <SearchBook searchFunction={setQuery} /> 
            
            {
                booksData.slice(indexOfFirstBook, indexOfLastBook).map(book => 
                    <BookRow book={book} 
                    key={book.bookId} />
                )
            }
            
            <PaginationNav postsPerPage={booksPerPage} 
            totalPosts={booksData.length} 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
            
            <AddBookButton />
        </div>
    );
}

export default BookListSite;