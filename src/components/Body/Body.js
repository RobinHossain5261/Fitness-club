import React, { useEffect, useState } from 'react';
import Excreiece from '../Excreiece/Excreiece';

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
                <h1>Info container</h1>
            </div>
        </div>
    );
};

export default Body;