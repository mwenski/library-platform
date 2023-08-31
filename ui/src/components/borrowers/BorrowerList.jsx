import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getBorrowersAction } from "../../redux/actions/borrowerAction";
import BorrowerRow from "./BorrowerRow";

function BorrowerList(){
    const dispatch = useDispatch();
    const borrowersData = useSelector(state => state.borrower.borrowers);

    useEffect(() => {
        dispatch(
            getBorrowersAction()
        );
    }, [dispatch]);

    console.log(borrowersData);

    return(
        <table className="borrower-list">
            <thead>
                <tr>
                    <td><h4>Borrower ID</h4></td>
                    <td><h4>First Name</h4></td>
                    <td><h4>Last Name</h4></td>
                    <td><h4>Phone number</h4></td>
                    <td />
                </tr>
            </thead>
            <tbody>
                {
                    borrowersData.map(borrower => 
                        <BorrowerRow borrower={borrower} 
                        key={borrower.borrowerId} />
                    )
                }
            </tbody>
        </table>
    );
}

export default BorrowerList;