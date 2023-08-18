import { useState, useEffect } from "react";
import { getCopiesByBookId, deleteCopy } from "../../services/CopyService";
import { borrowBook } from "../../services/LibraryService";
import CopyRow from "./CopyRow";

function CopyList({ bookId }){
    const [copies, setCopies] = useState([]);
    const [numberOfCopies, setNumberOfCopies] = useState([]);
    const [copyBorrowed, setCopyBorrowed] = useState({});
    useEffect(() => {
        getCopiesByBookId(bookId).then(res => {
            setCopies(res.data);
        });
    }, [bookId, numberOfCopies, copyBorrowed]);

    function delCopy(copyId){
        deleteCopy(copyId).then(
            setNumberOfCopies(numberOfCopies - 1)
        )
    }

    function borBook(copyId){
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

        borrowBook(loan, copy).then(res =>
            setCopyBorrowed(res)
        )
    }
    
    return(
        <table className="copy-list">
            <thead>
                <tr>
                    <td>
                        <h4>Signature</h4>
                    </td>
                    <td>
                        <h4>Place symbol</h4>
                    </td>
                    <td>
                        <h4>Status</h4>
                    </td>
                    <td />
                </tr>
            </thead>
            <tbody>
                {
                    copies.map(copy => 
                        <CopyRow copy={copy} deleteCopy={delCopy} borrowBook={borBook} key={copy.copyId}/>
                    )
                }
            </tbody>
        </table>
    );
}

export default CopyList;