import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Excreiece from '../Excreiece/Excreiece';
import Profile from '../Profile/Profile';
import './Body.css';


const Body = () => {
    const [excrieces, setExcreieces] = useState([]);
    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setExcreieces(data))
    }, []);

    const addHandelar = () => {
        console.log('clicked')
    }

    return (
        <div className='main-container'>
            <div>
                <Header></Header>
                <h2 className='select-today'>Select today’s exercise</h2>
                <div className="body-container">

                    {
                        excrieces.map(excriece => <Excreiece
                            key={excriece.id}
                            excriece={excriece}
                            addHandelar={addHandelar}
                        ></Excreiece>)
                    }
                </div>

            </div>
            <div className="info-container">
                <Profile></Profile>
                {/* <Break></Break> */}
                {/* <Time></Time> */}
            </div>
        </div>
    );
};

export default Body;