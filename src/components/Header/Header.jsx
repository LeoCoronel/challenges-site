import React from 'react'
import Logo from '../../assets/images/icon-logo.svg';
import Github from '../../assets/images/github.svg';
import Linkedin from '../../assets/images/linkedin.svg';

const Header = () => {
    return (
        <nav className='nav'>
            <img src={Logo} alt="logo" className="nav__logo"/>

            <div className="nav__socials">
                <a href="https://github.com/LeoCoronel" target="_blank" className='nav__socials__link'>
                    <img src={Github} alt="github" className="nav__socials__logo" />
                </a>
                <a href="https://www.linkedin.com/in/leonardo-m-coronel/" target="_blank" className='nav__socials__link'>
                    <img src={Linkedin} alt="linkedin" className="nav__socials__logo" />
                </a>
            </div>
        </nav>
    )
}

export default Header