import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks, findBooks } from "../../services/BookService";
import BookList from "../../components/books/BookList";
import SearchBook from "../../components/global/SearchBar";
import PaginationNav from "../../components/global/PaginationNav";

function BookListSite(){
    const [books, setBooks] = useState([]);
    const [numberOfBooks, setNumberOfBooks] = useState([]);
    const [find, setFind] = useState("");

    useEffect(() => {
        if(find!==""){
            findBooks(find).then(res => {
                setBooks(res.data);
            })
        }else{
            getAllBooks().then(res => {
                setBooks(res.data);
            })
        }
    }, [numberOfBooks, find]);

    function findBook(find){
        setFind(find);
    }

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
        if(currentPage!==Math.ceil(books.length/booksPerPage)){
            setCurrentPage(currentPage+1);
        }
    }

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;

    return (
        <div>
            {/* <SearchBook find={find} 
            findFunc={findBook} />  */}
            <BookList />
            {/* <PaginationNav postsPerPage={booksPerPage} 
            totalPosts={books.length} 
            paginate={paginate} 
            previousPage={previousPage} 
            nextPage={nextPage} /> */}
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