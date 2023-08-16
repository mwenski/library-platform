import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks, findBooks, deleteBook } from "../../services/BookService";
import BookList from "../../components/books/BookList";
import SearchBook from "../../components/global/SearchBar";

function Books(){
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

    function delBook(id){
        deleteBook(id).then(res => {
            console.log(res);
            setNumberOfBooks(numberOfBooks - 1);
        })
    }

    function findBook(find){
        setFind(find);
    }

    return (
        <div>
            <SearchBook find={find} findFunc={findBook} /> 
            <Link to="/create-book"><button className="button-create" title="Add a book!">+</button></Link>
            <BookList books={books} deleteBook={delBook} />
        </div>
    );
}

export default Books;