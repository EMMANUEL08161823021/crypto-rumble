import React from 'react';

import '../Navbar/Navbar.scss'

import Logo from '../../images/crypto-logo.jpg'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <img src={Logo} alt="logo" />
            <h1>CRYPTO <span>RUMBLE</span></h1>
        </div>
    )
}

export default Navbar;