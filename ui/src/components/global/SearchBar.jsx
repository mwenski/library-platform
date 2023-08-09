import React from "react";

function SearchBar(props){
    return (
        <div>
            <input type="text" value={props.find} placeholder="Find..." onChange={(e) => props.findFunc(e.target.value)}/>
        </div>
    )
}

export default SearchBar;