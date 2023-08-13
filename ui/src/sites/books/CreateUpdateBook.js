import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById, createBook, updateBook } from "../../services/BookService";

function CreateUpdateBook(){
    const { id } = useParams();

    const [book, setBook] = useState({});
    useEffect(() => {
        if(id){
            getBookById(id).then(res => {
                setBook(res.data);
            });
        }
    }, [id]);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverUrl, setCoverUrl] = useState("");
    const [description, setDescription] = useState("");
    const [publisher, setPublisher] = useState("");
    const [isbn, setIsbn] = useState("");
    const [publicationYear, setPublicationYear] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    useEffect(() => {
        setTitle(book.title);
        setAuthor(book.author);
        setCoverUrl(book.coverUrl);
        setDescription(book.description);
        setPublisher(book.publisher);
        setIsbn(book.isbn);
        setPublicationYear(book.publicationYear);
        setNumberOfPages(book.numberOfPages);
    }, [book]);

    function addBook(){
        const book = {
            title: title,
            author: author,
            coverUrl: coverUrl,
            description: description,
            publisher: publisher,
            isbn: isbn,
            publicationYear: publicationYear,
            numberOfPages: numberOfPages
        }

        createBook(book).then((res) => {
            console.log(res);
        })
    }

    function updBook(){
        const book = {
            bookId: id,
            title: title,
            author: author,
            coverUrl: coverUrl,
            description: description,
            publisher: publisher,
            isbn: isbn,
            publicationYear: publicationYear,
            numberOfPages: numberOfPages
        }

        updateBook(book).then((res) => {
            console.log(res);
        })
    }
    
    let handleSubmit = (e) => {
        if(id){
            updBook();
        }else{
            addBook();
        }
    };

    return(
        <div>
            <h2>{id ? 'Update a book!' : 'Add a book'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title || ""} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" value={author || ""} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <label>Cover URL</label>
                    <input type="text" value={coverUrl || ""} placeholder="Cover URL" onChange={(e) => setCoverUrl(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description || ""} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Publisher</label>
                    <input type="text" value={publisher || ""} placeholder="Publisher" onChange={(e) => setPublisher(e.target.value)} />
                </div>
                <div>
                    <label>ISBN</label>
                    <input type="text" value={isbn || ""} placeholder="ISBN" onChange={(e) => setIsbn(e.target.value)} />
                </div>
                <div>
                    <label>Publication year</label>
                    <input type="number" value={publicationYear || 0} placeholder={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} />
                </div>
                <div>
                    <label>Number of pages</label>
                    <input type="number" value={numberOfPages || 0} placeholder={numberOfPages} onChange={(e) => setNumberOfPages(e.target.value)} />
                </div>
                
                <button type="submit">{id ? 'Update' : 'Create'}</button>

                
            </form>
        </div>
    );
}

export default CreateUpdateBook