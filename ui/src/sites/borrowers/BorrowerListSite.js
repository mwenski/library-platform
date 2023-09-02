import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/global/SearchBar";
import PaginationNav from "../../components/global/PaginationNav";

import { useDispatch, useSelector } from "react-redux";
import { getBorrowersAction } from "../../redux/actions/borrowerAction";
import BorrowerRow from "../../components/borrowers/BorrowerRow";

function BorrowerListSite(){
    const dispatch = useDispatch();
    const borrowersData = useSelector(state => state.borrower.borrowersArray);

    useEffect(() => {
        dispatch(
            getBorrowersAction()
        );
    }, [dispatch]);
    
    const [numberOfBorrowers, setNumberOfBorrowers] = useState([]);
    const [find, setFind] = useState("");

    function findBorrower(find){
        setFind(find);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [borrowersPerPage] = useState(20);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const previousPage = () => {
        if(currentPage!==1){
            setCurrentPage(currentPage-1);
        }
    }

    const nextPage = () => {
        if(currentPage!==Math.ceil(borrowersData.length/borrowersPerPage)){
            setCurrentPage(currentPage+1);
        }
    }

    const indexOfLastBorrower = currentPage * borrowersPerPage;
    const indexOfFirstBorrower = indexOfLastBorrower - borrowersPerPage;

    return (
        <div>
            {/* <SearchBar find={find} 
            findFunc={findBorrower} /> */}
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
                        borrowersData.slice(indexOfFirstBorrower, indexOfLastBorrower).map(borrower => 
                            <BorrowerRow borrower={borrower} 
                            key={borrower.borrowerId} />
                        )
                    }
                </tbody>
            </table>

            <PaginationNav postsPerPage={borrowersPerPage} 
            totalPosts={borrowersData.length} 
            paginate={paginate} 
            previousPage={previousPage} 
            nextPage={nextPage} />

            <Link to="/register">
                <button className="button-create" 
                title="Register new borrower">
                    +
                </button>
            </Link>
        </div>
    );
}

export default BorrowerListSite;