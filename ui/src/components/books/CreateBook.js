import React, { useState } from "react";
import { createBook } from "../../services/BookService";

function CreateBook(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverUrl, setCoverUrl] = useState("");
    const [description, setDescription] = useState("");
    const [publisher, setPublisher] = useState("");
    const [isbn, setIsbn] = useState("");
    const [publicationYear, setPublicationYear] = useState(2000);
    const [numberOfPages, setNumberOfPages] = useState(100);

    let handleSubmit = (e) => {
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

    };

    return(
        <div>
            <h2>Add a book!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <label>Cover URL</label>
                    <input type="text" value={coverUrl} placeholder="Cover URL" onChange={(e) => setCoverUrl(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Publisher</label>
                    <input type="text" value={publisher} placeholder="Publisher" onChange={(e) => setPublisher(e.target.value)} />
                </div>
                <div>
                    <label>ISBN</label>
                    <input type="text" value={isbn} placeholder="ISBN" onChange={(e) => setIsbn(e.target.value)} />
                </div>
                <div>
                    <label>Publication year</label>
                    <input type="number" value={publicationYear} placeholder="2000" onChange={(e) => setPublicationYear(e.target.value)} />
                </div>
                <div>
                    <label>Number of pages</label>
                    <input type="number" value={numberOfPages} placeholder="100" onChange={(e) => setNumberOfPages(e.target.value)} />
                </div>
                
                <button type="submit">Create</button>

                
            </form>
        </div>
    );
}

export default CreateBook;