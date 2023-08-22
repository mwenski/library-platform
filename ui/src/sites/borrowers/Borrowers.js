import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBorrowers, findBorrowers, deleteBorrower } from "../../services/BorrowerService";
import BorrowerList from "../../components/borrowers/BorrowerList";
import SearchBar from "../../components/global/SearchBar";
import PaginationNav from "../../components/global/PaginationNav";

function Borrowers(){
    const [borrowers, setBorrowers] = useState([]);
    const [numberOfBorrowers, setNumberOfBorrowers] = useState([]);
    const [find, setFind] = useState("");
    useEffect(() => {
        if(find!==""){
            findBorrowers(find).then(res => {
                setBorrowers(res.data);
            }) 
        }else{
            getAllBorrowers().then(res => {
                setBorrowers(res.data);
            })
        }
    }, [numberOfBorrowers, find]);

    function delBorrower(id){
        deleteBorrower(id).then(
            setNumberOfBorrowers(numberOfBorrowers - 1)
        )
    }

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
        if(currentPage!==Math.ceil(borrowers.length/borrowersPerPage)){
            setCurrentPage(currentPage+1);
        }
    }

    const indexOfLastBorrower = currentPage * borrowersPerPage;
    const indexOfFirstBorrower = indexOfLastBorrower - borrowersPerPage;

    return (
        <div>
            <SearchBar find={find} findFunc={findBorrower} />
            <Link to="/register"><button className="button-create" title="Register new borrower">+</button></Link>
            <BorrowerList borrowers={borrowers.slice(indexOfFirstBorrower, indexOfLastBorrower)} deleteBorrower={delBorrower} />
            <PaginationNav postsPerPage={borrowersPerPage} totalPosts={borrowers.length} paginate={paginate} previousPage={previousPage} nextPage={nextPage} />
        </div>
    );
}

export default Borrowers;