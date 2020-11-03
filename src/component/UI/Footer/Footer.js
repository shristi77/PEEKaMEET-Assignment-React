import React from 'react';
import classes from './Footer.css';
import Image from '../../UI/Image/Image';

const Footer = (props) => {

    return (
        <div>
            <footer className={[classes.Footer, classes[props.footerType]].join(' ')}>
                <span className={classes.peekameet}>PEEKaMEET&copy;2020</span>
                <span className={classes.follow}>Follow Us:</span>
                <Image type="footer"/>
                <span>FAQs </span>
                <span>Terms &amp; Conditions</span>
                <span>Privacy Policy </span>
                <span>About Us </span>
                <span>Press </span>
                <span>Contact Us </span>
                <span>Perks </span>
                <span>Blog </span>
            </footer>
        </div>
    )
}

export default Footer;
