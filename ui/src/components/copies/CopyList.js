import React from "react";
import CreateUpdateCopy from "./CreateUpdateCopy";

function CopyList(props){
    
    return(
        <table>
            <tbody>
                {
                    props.copies.map(copy => {
                        let updCopy = {
                            copyId: copy.copyId,
                            loanStatus: "borrowed"
                        };

                        let newLoan = {
                            bookId: copy.bookId,
                            copyId: copy.copyId,
                            borrowerId: 1,
                            dateBorrowed: new Date(),
                            dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
                            status: "borrowed"
                        };

                        let borrow;

                        if(copy.loanStatus === "available"){
                            borrow = <button type="button" onClick={(e) => props.borrowBook(updCopy, newLoan)}>Borrow</button>
                        }

                        return(
                            <tr key={copy.copyId}>
                                <td>
                                    {copy.signature}
                                </td>
                                <td>
                                    {copy.loanStatus}
                                </td>
                                <td>
                                    <button type="button" onClick={(e) => props.deleteCopy(copy.copyId)}>Delete</button>
                                </td>
                                <td>
                                    <CreateUpdateCopy copy={copy} />
                                </td>
                                <td>
                                    {borrow}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default CopyList;