import { BsSearch } from "react-icons/bs";

function SearchBar(props){
    function handleSubmit(){
        
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" value={props.find} placeholder="Find..." onChange={(e) => props.findFunc(e.target.value)}/>
            <button><BsSearch /></button>
        </form>
    )
}

export default SearchBar;