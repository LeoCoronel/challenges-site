import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import Image from '../../assets/images/meno.png'
import DATA from '../../services/data';

const Cards = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = DATA.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <div className='cards'>
                {currentPosts.map((card, index) => {
                    return <Card key={`card--${index}`} image={card.image} title={card.title} web={card.web} github={card.github} />
                })}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={DATA.length} paginate={paginate} currentPage={currentPage} />
        </>
    )
}

export default Cards