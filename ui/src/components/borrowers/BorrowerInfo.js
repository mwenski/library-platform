import React from "react";

function BorrowerInfo({ borrower }){

    return (
        <div>
            <h1>{borrower.firstName} {borrower.lastName}</h1>
            <h2>{borrower.address}</h2>
            <h3>{borrower.phoneNumber}</h3>
            <h3>{borrower.email}</h3>
        </div>
    );
}

export default BorrowerInfo;