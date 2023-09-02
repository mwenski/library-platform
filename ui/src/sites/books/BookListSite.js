import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks, findBooks } from "../../services/BookService";
import SearchBook from "../../components/global/SearchBar";
import PaginationNav from "../../components/global/PaginationNav";

import BookRow from "../../components/books/BookRow";
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from "../../redux/actions/bookAction";

function BookListSite(){
    const dispatch = useDispatch();
    const booksData = useSelector(state => state.book.booksArray);

    useEffect(() => {
        dispatch(
            getBooksAction()
        );
    }, [dispatch]);


    const [numberOfBooks, setNumberOfBooks] = useState([]);
    const [find, setFind] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const previousPage = () => {
        if(currentPage!==1){
            setCurrentPage(currentPage-1);
        }
    }

    const nextPage = () => {
        if(currentPage!==Math.ceil(booksData.length/booksPerPage)){
            setCurrentPage(currentPage+1);
        }
    }

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;

    return (
        <div>
            {/* <SearchBook find={find} 
            findFunc={findBook} />  */}
            
            {
                booksData.slice(indexOfFirstBook, indexOfLastBook).map(book => 
                    <BookRow book={book} 
                    key={book.bookId} />
                )
            }
            
            <PaginationNav postsPerPage={booksPerPage} 
            totalPosts={booksData.length} 
            paginate={paginate} 
            previousPage={previousPage} 
            nextPage={nextPage} />
            
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