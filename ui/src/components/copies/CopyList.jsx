import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCopiesAction } from "../../redux/actions/copyAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";
import CopyRow from "./CopyRow";

const CopyList = ({ bookId }) => {
    const dispatch = useDispatch();
    const { copiesData } = useSelector(state => state.copy);
    const copies = copiesData.filter(copy => copy.bookId === parseInt(bookId));

    useEffect(() => {
        dispatch(
            getCopiesAction(
                bookId,
                () => dispatch(
                    showSnackbarAction('Cannot find copies', 'error')
                )
            )
        )
    }, [dispatch, bookId])

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