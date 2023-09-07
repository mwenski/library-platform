import { useState, useEffect } from "react";
import { getCopiesByBookId, deleteCopy } from "../../services/CopyService";
import { borrowBook } from "../../services/LibraryService";
import { borrowBookAction } from "../../redux/actions/libraryAction";
import CopyRow from "./CopyRow";
import { useSelector } from "react-redux";

function CopyList({ bookId }){
    const { copiesData } = useSelector(state => state.copy);
    const copies = copiesData.filter(copy => copy.bookId === parseInt(bookId));

    if(copies.length === 0){
        return(
            <div className="no-data">
                <h1>Copies not available</h1>
            </div>
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
                        <CopyRow copy={copy} 
                        key={copy.copyId} />
                    )
                }
            </tbody>
        </table>
    );
}

export default CopyList;