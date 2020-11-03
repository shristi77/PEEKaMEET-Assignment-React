import React from 'react';
import Header from '../UI/Header/Header';
import classes from './UserProfile.css';
import Profile from './Profile/Profile';
import Footer from '../UI/Footer/Footer';

const UserProfile = (props) => {
    return (
        <div className={classes.UserProfile}>
            <Header type='userProfile' />
            <Profile/>
            <Footer />
        </div>
    )
}

export default UserProfile;