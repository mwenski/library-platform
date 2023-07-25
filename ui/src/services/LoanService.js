export async function getAllLoans(){
    const response = await fetch('/loan');
    return await response.json();
}

export async function getLoanById(loanId){
    const response = await fetch(`/loan/id/${loanId}`);
    return await response.json();
}

export async function getLoansByBorrowerId(bookId){
    const response = await fetch(`/loan/borrower/${bookId}`);
    return await response.json();
}

export async function createLoan(data){
    const response = await fetch('/loan', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({loan: data})
    });
    return await response.json();
}

export async function updateLoan(data){
    const response = await fetch('/loan', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({loan: data})
    });
    return await response.json();
}

export async function deleteLoan(loanId){
    const response = await fetch(`/loan/id/${loanId}`, {
        method: 'DELETE'
    });
    return await response.json();
}