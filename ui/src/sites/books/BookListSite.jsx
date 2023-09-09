import React, { useState, useEffect } from "react";
import "../../styles/BookListSite.css";
import { Link } from "react-router-dom";
import SearchBook from "../../components/global/SearchBar";
import PaginationNav from "../../components/global/PaginationNav";

import BookRow from "../../components/books/BookRow";
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction, searchBooksAction } from "../../redux/actions/bookAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";

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
            
            <Link to="/create-book">
                <button className="button-create" 
                title="Add a book!">
                    +
                </button>
            </Link>
        </div>
    );
}

export default BookListSite;