export async function getAllCopies(){
    const response = await fetch('/copy');
    return await response.json();
}

export async function getCopyById(copyId){
    const response = await fetch(`/copy/id/${copyId}`);
    return await response.json();
}

export async function getCopiesByBookId(bookId){
    const response = await fetch(`/copy/book/${bookId}`);
    return await response.json();
}

export async function createCopy(data){
    const response = await fetch('/copy', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({copy: data})
    });
    return await response.json();
}

export async function updateCopy(data){
    const response = await fetch('/copy', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({copy: data})
    });
    return await response.json();
}

export async function deleteCopy(copyId){
    const response = await fetch(`/copy/id/${copyId}`, {
        method: 'DELETE'
    });
    return await response.json();
}