import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBorrowersAction, searchBorrowersAction } from "../../redux/actions/borrowerAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";
import SearchBorrower from "../../components/global/SearchBar";
import PaginationNav from "../../components/global/PaginationNav";
import BorrowerRow from "../../components/borrowers/BorrowerRow";

const BorrowerListSite = () => {
    const dispatch = useDispatch();
    const { borrowersData, searchQuery } = useSelector(state => state.borrower);
    const [query, setQuery] = useState(searchQuery)

    useEffect(() => {
        if(query !== ""){
            dispatch(
                searchBorrowersAction(
                    query,
                    () => dispatch(
                        showSnackbarAction('Cannot find these borrowers', 'error')
                    )
                )
            );
        }else{
            dispatch(
                getBorrowersAction(
                    () => dispatch(
                        showSnackbarAction('Cannot find any borrower', 'error')
                    )
                )
            );
        }
    }, [dispatch, query]);

    const [currentPage, setCurrentPage] = useState(1);
    const [borrowersPerPage] = useState(20);

    const indexOfLastBorrower = currentPage * borrowersPerPage;
    const indexOfFirstBorrower = indexOfLastBorrower - borrowersPerPage;

    return (
        <div>
            <SearchBorrower query={query} 
            setQuery={setQuery} />

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
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />

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