import React from 'react';
import './Excreiece.css';

const Excreiece = (props) => {
    // console.log(props)
    const { age, name, time, title, img } = props.excriece;
    const { addHandelar } = props;


    return (
        <div className='excreiece-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='title'>{title}</p>
            <p>For Age: {age}</p>
            <p>Time required: {time}s</p>

            <button onClick={() => addHandelar(props.excriece)} className='add-btn'>Add to list</button>
        </div>
    );
};

export default Excreiece;