import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="ema-jhon" />
            <nav>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;