import React from 'react';
import classes from './Header.css';
import Button from '../Button/Button';
import Image from '../Image/Image';

const Header = (props) => {
    let header = (
        <nav className={classes.SignupHeader}>
                <span className={classes.logo}></span>
                <span className={classes.peekameet}>PEEKaMEET</span>
                <div className={classes.button}>
                    <Button className={classes.button} btnType="Small">Sign In</Button>
                    <Button className={classes.button} btnType="Small">Sign Up</Button>
                </div>
            </nav>
    );
    if(props.type === 'userProfile'){
        header= (<nav className={classes.userprofileHeader}>
            <Image type="userProfileHeader"/>
            <button className={classes.myProfile}></button>
        </nav>);
    }
    return (
        <div>
            {header}
        </div>
    )
}

export default Header
