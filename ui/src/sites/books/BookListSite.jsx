import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks, findBooks } from "../../services/BookService";
import SearchBook from "../../components/global/SearchBar";
import PaginationNav from "../../components/global/PaginationNav";

import BookRow from "../../components/books/BookRow";
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction, searchBooksAction } from "../../redux/actions/bookAction";

function BookListSite(){
    const dispatch = useDispatch();
    const { booksData, searchQuery } = useSelector(state => state.book);
    const [query, setQuery] = useState(searchQuery);

    useEffect(() => {
        if(query !== ""){
            dispatch(
                searchBooksAction(query)
            );
        }
        if(searchQuery === ""){
            dispatch(
                getBooksAction()
            );
        }
    }, [dispatch, query, searchQuery]);
    console.log(searchQuery)

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;

    return (
        <div>
            <SearchBook findRecord={setQuery} /> 
            
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