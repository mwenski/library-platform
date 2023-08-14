function SearchBar(props){
    return (
        <div className="search-bar">
            <input type="text" value={props.find} placeholder="Find..." onChange={(e) => props.findFunc(e.target.value)}/>
        </div>
    )
}

export default SearchBar;