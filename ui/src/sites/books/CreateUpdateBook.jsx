import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CreateUpdateBook.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getBookAction, createBookAction, updateBookAction } from "../../redux/actions/bookAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";

const CreateUpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { booksData } = useSelector(state => state.book);
    const book = booksData.find(book => book.bookId === parseInt(id));

    useEffect(() => {
        if(!book){
            dispatch(
                getBookAction(
                    id,
                    () => dispatch(
                        showSnackbarAction('Cannot find this book', 'error')
                    )
                )
            )    
        }
    }, [dispatch, book, id])

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [coverUrl, setCoverUrl] = useState("");
    const [description, setDescription] = useState("");
    const [publisher, setPublisher] = useState("");
    const [isbn, setIsbn] = useState("");
    const [publicationYear, setPublicationYear] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);

    useEffect(() => {
        if(book){
            setTitle(book.title);
            setAuthor(book.author);
            setCoverUrl(book.coverUrl);
            setDescription(book.description);
            setPublisher(book.publisher);
            setIsbn(book.isbn);
            setPublicationYear(book.publicationYear);
            setNumberOfPages(book.numberOfPages);
        }
    }, [book]);


    function createBook(){
        const newBook = {
            title: title,
            author: author,
            coverUrl: coverUrl,
            description: description,
            publisher: publisher,
            isbn: isbn,
            publicationYear: publicationYear,
            numberOfPages: numberOfPages
        }

        dispatch(
            createBookAction(
                newBook,
                () => {
                    dispatch(showSnackbarAction('Book added', 'success'));
                    navigate('/');
                },
                () => dispatch(
                    showSnackbarAction('Cannot add book', 'error')
                ) 
            )
        )
    }

    function updateBook(){
        const updatedBook = {
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

        dispatch(
            updateBookAction(
                updatedBook,
                () => {
                    dispatch(showSnackbarAction('Book updated', 'success'));
                    navigate('/');
                },
                () => dispatch(
                    showSnackbarAction('Cannot update the book', 'error')
                ) 
            )
        )
    }
    
    let handleSubmit = (e) => {
        e.preventDefault();

        if(book){
            updateBook();
        }else{
            createBook();
        }
    };

    const handleImgError = (e) => {
        e.target.onError = null;
        e.target.src = 'no-cover.jpg';
    }

    const select = (
        <select name="category"
        defaultValue={category}
        onChange={(e) => setCategory(e.target.value)}>
            <option value="Adventure">Adventure</option>
            <option value="Biography">Biography</option>
            <option value="Classic">Classic</option>
            <option value="Crime">Crime</option>
            <option value="Fairy tale">Fairy Tale</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Humour">Humour</option>
            <option value="Mystery">Mystery</option>
            <option value="Poetry">Poetry</option>
            <option value="Romance">Romance</option>
            <option value="Science fiction">Science fiction</option>
        </select>
    )

    return(
        <div className="create-update-book">
            <h2>{book ? 'Update a book!' : 'Add a book'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="column">
                        <div>
                            <label>Title</label>
                            <input type="text" 
                            value={title || ""} 
                            placeholder="Title" 
                            onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label>Author</label>
                            <input type="text" 
                            value={author || ""} 
                            placeholder="Author" 
                            onChange={(e) => setAuthor(e.target.value)} />
                        <div>
                            <label>Category</label>
                            { select }
                        </div>
                        </div>
                        <div>
                            <label>Cover URL</label>
                            <input type="text" 
                            value={coverUrl || ""} 
                            placeholder="Cover URL" 
                            onChange={(e) => setCoverUrl(e.target.value)} />
                        </div>
                        <div>
                            <label>Publisher</label>
                            <input type="text" 
                            value={publisher || ""} 
                            placeholder="Publisher" 
                            onChange={(e) => setPublisher(e.target.value)} />
                        </div>
                        <div>
                            <label>ISBN</label>
                            <input type="text" 
                            value={isbn || ""} 
                            placeholder="ISBN" 
                            onChange={(e) => setIsbn(e.target.value)} />
                        </div>
                        <div>
                            <label>Publication year</label>
                            <input type="number" 
                            value={publicationYear || 0} 
                            placeholder={publicationYear} 
                            onChange={(e) => setPublicationYear(e.target.value)} />
                        </div>
                        <div>
                            <label>Number of pages</label>
                            <input type="number" 
                            value={numberOfPages || 0} 
                            placeholder={numberOfPages} 
                            onChange={(e) => setNumberOfPages(e.target.value)} />
                        </div>
                    </div>
                    <div className="column">
                        <div>
                            <label>Cover preview</label>
                            <img src={coverUrl ?? 'no-cover.jpg'} 
                            alt={coverUrl} 
                            onError={handleImgError}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="description">
                        <label>Description {description.length}/255</label>
                        <textarea value={description || ""} 
                        placeholder="Description" 
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength="255"/>
                    </div>
                </div>
                <div className="row">
                    <button className="button-library" 
                    type="submit">
                        {book ? 'Update' : 'Create'}
                    </button>
                </div> 
            </form>
        </div>
    );
}

export default CreateUpdateBook