import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Time.css';

const Time = (props) => {
    // console.log(props)
    const notify = () => {
        toast('activity is done');
    }
    return (
        <div className='time-container'>
            <h1>Exercise Details</h1>
            <h3>Exercise time:</h3>
            <h3>Break time:</h3>

            <div>
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Time;