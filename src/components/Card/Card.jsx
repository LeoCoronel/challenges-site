import React from 'react'
import Web from '../../assets/images/web.svg'
import Github from '../../assets/images/github.svg'

const Card = ({image, title, web, github}) => {
    return (
        <>
            <div className='card'>
                <div className='card__thumbnail'>
                    <img src={image} alt="thumbnail" className='card__thumbnail__image'/>
                </div>
                <h3 className='card__title'>{title}</h3>
                <div className='card__links'>
                    <a target="_blank" href={web}><img src={Web} alt="web" /></a>
                    <a target="_blank" href={github}><img src={Github} alt="github" /></a>
                </div>
            </div>
        </>
    )
}

export default Card;