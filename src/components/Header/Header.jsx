import React from "react";

import '../Header/Header.scss';

import { Link } from "react-router-dom";

import {FaCoins} from 'react-icons/fa';

const Header = () => {
    return (
        <Link to='/'>
            <div className="header">
                <div className="icons"><FaCoins/></div>
                <h1>Coin <span>Hunt</span></h1>
            </div>
        </Link>

    )
}

export default Header;