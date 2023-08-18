function SearchBar(props){
    function handleSubmit(){
        
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" value={props.find} placeholder="Find..." onChange={(e) => props.findFunc(e.target.value)}/>
        </form>
    )
}

export default SearchBar;