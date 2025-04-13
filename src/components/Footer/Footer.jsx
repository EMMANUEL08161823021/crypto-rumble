import React from 'react';

import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

import '../Footer/Footer.scss'

const Footer = () => (
    <div className='footer'>
        <div className="f-container">
            <h1>Crypto Rumble</h1>
            <div className='icons'>
                <FaWhatsapp/>
                <FaInstagram/>
                <FaTwitter/>

            </div>
        </div>
    </div>
)

export default Footer;