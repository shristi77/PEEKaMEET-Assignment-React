import React from 'react';
import classes from './Header.css';
import Button from '../Button/Button';

const Header = () => {
    return (
        <div>
            <nav className={classes.Header}>
                <span className={classes.logo}></span>
                <span className={classes.peekameet}>PEEKaMEET</span>
                <div className={classes.button}>
                    <Button className={classes.button} btnType="Success">Sign In</Button>
                    <Button className={classes.button} btnType="Danger">Sign Up</Button>
                </div>
            </nav>
        </div>
    )
}

export default Header
