import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ searchFunction }) => {
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        searchFunction(query);
    }

    return (
        <form className="search-bar"
        onSubmit={handleSubmit}>
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