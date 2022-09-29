import React, { useState } from 'react';
import './Break.css';

const Break = (props) => {

    const [time, setTime] = useState(0);
    const breakTime = (e) => {
        const newBreakTime = e.target.innerText;
        setTime(newBreakTime)
    }
    return (
        <div className='break-container'>
            <h1>Add A Break</h1>
            <div className='break-time'>
                <button onClick={breakTime}>10s</button>
                <button onClick={breakTime}>20s</button>
                <button onClick={breakTime}>30s</button>
                <button onClick={breakTime}>40s</button>
                <button onClick={breakTime}>50s</button>
            </div>
            <p>{time}</p>


        </div>
    );
};

export default Break;