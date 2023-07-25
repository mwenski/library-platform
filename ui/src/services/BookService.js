export async function getAllBooks(){
    const response = await fetch('/books');
    return await response.json();
}

export async function getBookById(bookId){
    const response = await fetch(`/book/id/${bookId}`);
    return await response.json();
}

export async function createBook(data){
    const response = await fetch('/book', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({book: data})
    });
    return await response.json();
}

export async function updateBook(data){
    const response = await fetch('/book', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({book: data})
    });
    return await response.json();
}

export async function deleteBook(bookId){
    const response = await fetch(`/book/id/${bookId}`, {
        method: 'DELETE'
    });
    return await response.json();
}