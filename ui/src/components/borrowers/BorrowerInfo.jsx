import { useSelector } from "react-redux";

function BorrowerInfo({ borrowerId }){
    const { borrowersData } = useSelector(state => state.borrower);
    const borrower = borrowersData.find(borrower => borrower.borrowerId == borrowerId);

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