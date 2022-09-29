import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Time.css';

const Time = ({ time }) => {

    let total = 0;
    for (const excreiece of time) {
        total = total + parseInt(excreiece.time)
    }




    const notify = () => {
        toast('activity is done');
    }
    return (
        <div className='time-container'>
            <h1>Exercise Details</h1>
            <h3>Exercise time:{total}</h3>


            <div>
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Time;