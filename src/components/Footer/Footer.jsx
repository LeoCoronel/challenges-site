import React from 'react'
import Logo from '../../assets/images/icon-logo.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__logo">
                <img src={Logo} alt="" />
            </div>
            <div className="footer__description">
                <p>Desarrollado con ♥ por <a href="https://www.leo-coronel.com.ar" target="_blank">Leo Coronel</a></p>
            </div>
        </footer>
    )
}

export default Footer;