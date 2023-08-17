import { Link } from "react-router-dom";

function BorrowerList(props){

    return(
        <table>
            <thead>
                <tr>
                    <td>Borrower ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Phone number</td>
                    <td />
                </tr>
            </thead>
            <tbody>
                {
                    props.borrowers.map(borrower => {
                        return(
                            <tr key={borrower.borrowerId}>
                                <td>
                                    <Link to={{ pathname: `/borrower/${borrower.borrowerId}`}}>
                                        {borrower.borrowerId}
                                    </Link>
                                </td>
                                <td>
                                    {borrower.firstName}
                                </td>
                                <td>
                                    {borrower.lastName}
                                </td>
                                <td>
                                    {borrower.phoneNumber}
                                </td>
                                <td>
                                    <button type="button" className="button-delete" onClick={(e) => props.deleteBorrower(borrower.borrowerId)}>Delete</button>
                                </td>
                                
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default BorrowerList;