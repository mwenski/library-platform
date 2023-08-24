import { GrPrevious, GrNext } from 'react-icons/gr';

function PaginationNav({ postsPerPage, totalPosts, paginate, previousPage, nextPage }){
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-nav">
            <ul>
                <li onClick={previousPage}>
                    <GrPrevious />
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
                    <GrNext />
                </li>
            </ul>
        </div>
    )

}

export default PaginationNav;