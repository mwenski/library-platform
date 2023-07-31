import React, { useState, useEffect } from "react";
import { getCopiesByBookId, updateCopy, deleteCopy } from "../../services/CopyService";
import { createLoan } from "../../services/LoanService";
import CopyRow from "./CopyRow";

function CopyList({bookId}){
    const [copies, setCopies] = useState([]);
    const [numberOfCopies, setNumberOfCopies] = useState([]);
    const [copyBorrowed, setCopyBorrowed] = useState({});
    useEffect(() => {
        getCopiesByBookId(bookId).then(copies => {
            setCopies(copies);
        });
    }, [bookId, numberOfCopies, copyBorrowed]);

    function delCopy(copyId){
        deleteCopy(copyId).then(res => {
            setNumberOfCopies(numberOfCopies - 1);
        })
    }

    function borrowBook(copyId){
        let copy = {
            copyId: copyId,
            loanStatus: "borrowed"
        };
    
        let loan = {
            bookId: bookId,
            copyId: copyId,
            borrowerId: 1,
            dateBorrowed: new Date(),
            dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
            status: "borrowed"
        };

        createLoan(loan).then(
            updateCopy(copy).then(res => {
                setCopyBorrowed(res)
            })
        )
    }
    
    return(
        <table>
            <tbody>
                {
                    copies.map(copy => 
                        <CopyRow copy={copy} deleteCopy={delCopy} borrowBook={borrowBook}/>
                    )
                }
            </tbody>
        </table>
    );
}

export default CopyList;