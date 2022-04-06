import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number, index) => {
                    return <li onClick={() => paginate(number)} key={number} className={`pagination__item`}>
                        <a href="!#" className={`pagination__item__link ${currentPage == index + 1 && "clicked"}`}>{number}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination