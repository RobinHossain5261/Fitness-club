import React from 'react';
import Header from '../Header/Header';
import './Body.css';

const Body = (props) => {
    return (
        <div className='body-container'>

            <div className="main-containear">
                <Header></Header>
            </div>

            <div className="info-containear">
                <h1>info container</h1>
            </div>
        </div>
    );
};

export default Body;