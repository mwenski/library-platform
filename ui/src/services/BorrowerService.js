export async function getAllBorrowers(){
    const response = await fetch('/borrowers');
    return await response.json();
}

export async function getBorrowerById(borrowerId){
    const response = await fetch(`/borrower/id/${borrowerId}`);
    return await response.json();
}

export async function createBorrower(data){
    const response = await fetch('/borrower', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({borrower: data})
    });
    return await response.json();
}

export async function updateBorrower(data){
    const response = await fetch('/borrower', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({borrower: data})
    });
    return await response.json();
}

export async function deleteBorrower(borrowerId){
    const response = await fetch(`/borrower/id/${borrowerId}`, {
        method: 'DELETE'
    });
    return await response.json();
}