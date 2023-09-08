const PaginationNav = ({ postsPerPage, totalPosts, currentPage, setCurrentPage }) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const previousPage = () => {
        if(currentPage!==1){
            setCurrentPage(currentPage-1);
        }
    }

    const nextPage = () => {
        if(currentPage!==Math.ceil(totalPosts/postsPerPage)){
            setCurrentPage(currentPage+1);
        }
    }

    return (
        <div className="pagination-nav">
            <ul>
                <li onClick={previousPage}>
                    &laquo;
                </li>
                {
                    pageNumbers.map(number => 
                        <li key={number} 
                        onClick={() => paginate(number)}>
                            { number }
                        </li>
                    )
                }
                <li onClick={nextPage}>
                    &raquo;
                </li>
            </ul>
        </div>
    )
}

export default PaginationNav;