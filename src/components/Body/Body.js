import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Excreiece from '../Excreiece/Excreiece';
import Profile from '../Profile/Profile';
import Time from '../Time/Time';

import './Body.css';

const Body = () => {
    const [excrieces, setExcreieces] = useState([]);
    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setExcreieces(data))
    }, []);
    return (
        <div className='main-container'>
            <div className="body-container">

                {
                    excrieces.map(excriece => <Excreiece
                        key={excriece.id}
                        excriece={excriece}
                    ></Excreiece>)
                }
            </div>
            <div className="info-container">
                <Profile></Profile>
                <Break></Break>
                <Time></Time>
            </div>
        </div>
    );
};

export default Body;