export async function borrowBook(loan, copy){
    const response = await fetch('/library/borrow-book', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({loan: loan, copy: copy})
    });
    return await response.json();
}

export async function returnBook(loan, copy){
    const response = await fetch('/library/return-book', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({loan: loan, copy: copy})
    });
    return await response.json();
}