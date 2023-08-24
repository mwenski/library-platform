import { BsSearch } from "react-icons/bs";

function SearchBar({ find, findFunc }){
    function handleSubmit(){    
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" 
            value={find} 
            placeholder="Find..." 
            onChange={(e) => findFunc(e.target.value)}/>
            <button><BsSearch /></button>
        </form>
    )
}

export default SearchBar;