import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBorrowers, findBorrowers, deleteBorrower } from "../../services/BorrowerService";
import BorrowerList from "../../components/borrowers/BorrowerList";
import SearchBar from "../../components/global/SearchBar";

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

    return (
        <div>
            <SearchBar find={find} findFunc={findBorrower} />
            <Link to="/register">Register a borrower!</Link>
            <BorrowerList borrowers={borrowers} deleteBorrower={delBorrower} />
        </div>
    );
}

export default Borrowers;