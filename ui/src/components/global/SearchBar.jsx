import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar({ findRecord }){
    const [query, setQuery] = useState('');

    function handleSubmit(){   
        findRecord(query);
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" 
            value={query || ''} 
            placeholder="Find..." 
            onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">
                <BsSearch />
            </button>
        </form>
    )
}

export default SearchBar;