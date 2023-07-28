import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBorrowers, deleteBorrower } from "../../services/BorrowerService";
import BorrowerList from "../../components/borrowers/BorrowerList";

function Borrowers(){
    const [borrowers, setBorrowers] = useState([]);
    const [numberOfBorrowers, setNumberOfBorrowers] = useState([]);

    useEffect(() => {
        getAllBorrowers().then(borrowers => {
            setBorrowers(borrowers);
        })
    }, [numberOfBorrowers]);

    function delBorrower(id){
        deleteBorrower(id).then(res => {
            console.log(res);
            setNumberOfBorrowers(numberOfBorrowers - 1);
        })
    }

    return (
        <div>
            <Link to="/register">Register a borrower!</Link>
            <BorrowerList borrowers={borrowers} deleteBorrower={delBorrower} />
        </div>
    );
}

export default Borrowers;