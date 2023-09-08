import { useSelector } from "react-redux";
import LoanRow from "./LoanRow";

const LoanList = ({ borrowerId, status }) => {
    const { loansData } = useSelector(state => state.loan);
    const loans = loansData.filter(loan => loan.borrowerId === parseInt(borrowerId))
                    .filter(loan => loan.status === status);

    if(loans.length === 0){
        return(
            <div className="no-data">
                <h1>You didn't borrowed any book yet</h1>
            </div>
        )
    }
    
    return(
        <table className="loan-list">
            <thead>
                <tr>
                    <td><h4>Title</h4></td>
                    <td><h4>Author</h4></td>
                    <td><h4>Signature</h4></td>
                    <td><h4>Date borrowed</h4></td>
                    <td><h4>{status === "borrowed" ? "Due date" : "Date returned"}</h4></td>
                    <td />
                </tr>
            </thead>
            <tbody>
                {
                    loans.map(loan => 
                        <LoanRow loan={loan} />
                    )
                }
            </tbody>
        </table>
    );
}

export default LoanList;