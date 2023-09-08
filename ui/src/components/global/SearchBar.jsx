import { BsSearch } from "react-icons/bs";

const SearchBar = ({ query, setQuery }) => {
    return (
        <form className="search-bar">
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