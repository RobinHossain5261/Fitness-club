import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <h1>FITNESS-CLUB</h1>
        </div>
    );
};

export default Header;