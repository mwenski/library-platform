import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBorrowerAction } from "../../redux/actions/borrowerAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";

const BorrowerInfo = ({ borrowerId }) => {
    const dispatch = useDispatch();
    const { borrowersData } = useSelector(state => state.borrower);
    const borrower = borrowersData.find(borrower => borrower.borrowerId === borrowerId);

    useEffect(() => {
        if(!borrower){
            dispatch(
                getBorrowerAction(
                    borrowerId,
                    () => dispatch(
                        showSnackbarAction('Cannot find this borrower', 'error')
                    )
                )
            )
        }
    }, [dispatch, borrower, borrowerId]);

    if(!borrower){
        return(
            <div className="no-data">
                <h1>Borrower not found</h1>
            </div>
        )
    }

    return (
        <div className="borrower-info">
            <div className="column">
                <div className="row">
                    <table>
                        <tbody>
                            <tr>
                                <td><h3>ID Number:</h3></td>
                                <td><h3>{borrower.borrowerId}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>First name:</h3></td>
                                <td><h3>{borrower.firstName}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Last name:</h3></td>
                                <td><h3>{borrower.lastName}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Address:</h3></td>
                                <td><h3>{borrower.address}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Email:</h3></td>
                                <td><h3>{borrower.email}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Phone number:</h3></td>
                                <td><h3>{borrower.phoneNumber}</h3></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BorrowerInfo;