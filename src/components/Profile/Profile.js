import React from 'react';
import './Profile.css';
import profile from '../../images/profile.jpg';

const Profile = () => {
    return (
        <div className='profile'>
            <div >
                <div className='profile-container'>
                    <img src={profile} alt="" />
                    <div>
                        <h2>Robin Hossain</h2>
                        <h5>Pabna,Bangladesh</h5>
                    </div>
                </div>

                <div className='profile-info'>
                    <div>
                        <h1>75 <span>kg</span></h1>
                        <h3 className='catagory'>Weight</h3>
                    </div>
                    <div>
                        <h1>5.8</h1>
                        <h3 className='catagory'>height</h3>
                    </div>
                    <div>
                        <h1>25 <span>years</span></h1>
                        <h3 className='catagory'>Age</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;