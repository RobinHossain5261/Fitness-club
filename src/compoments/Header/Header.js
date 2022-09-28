import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <h1>Fitness-Club</h1>
        </div>
    );
};

export default Header;