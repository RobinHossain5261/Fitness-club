import React from 'react';
import './Excreiece.css';

const Excreiece = (props) => {
    const { age, name, time, title, img } = props.excriece;
    return (
        <div className='excreiece-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='title'>{title}</p>
            <p>For Age: {age}</p>
            <p>Time required: {time}s</p>
        </div>
    );
};

export default Excreiece;