import React from 'react'

const Home = ({children}) => {
    return (
        <>
            <div className='home'>
                <h1 className='home__title'>Challenges</h1>
                <p className="home__description">
                    Esta página tiene el fin de enseñar los challenges que nos brindan en el bootcam de <a href="https://nucba.com.ar">Nucba</a>
                </p>
                {children}
            </div>
        </>
    )
}

export default Home;