import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

function BorrowerList(props){

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
                    props.borrowers.map(borrower => {
                        return(
                            <tr key={borrower.borrowerId}>
                                <td>
                                    {borrower.borrowerId}
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
                                    <Link to={{ pathname: `/borrower/${borrower.borrowerId}`}}>
                                        <button className="button-library" title="Get borrower data">More</button> 
                                    </Link>
                                    <button type="button" className="button-delete" onClick={(e) => props.deleteBorrower(borrower.borrowerId)}><BsTrash /></button>
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