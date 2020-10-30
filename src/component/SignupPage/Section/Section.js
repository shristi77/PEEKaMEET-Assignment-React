import React from 'react';
import classes from './Section.css';
import ImageSection from './ImageSection/ImgaeSection';
import SignupSection from './SignupSection/SignupSection';

const Section = (props) => {


    return (
        <div>
            <section className={classes.Section}>
                <ImageSection />
                <div className={classes.section2}>
                    <p 
                        className={classes.para1}>
                        <span 
                            className={classes.peekameet}>
                                PEEKaMEET
                        </span> lets you network more effectively to achieve your business and career goals
                    </p>
                    <p className={classes.para2}>
                    Build and manage your network with PEEKaMEET
                    </p>
                    <SignupSection/>
                </div>
            </section>
        </div>
    )
}


export default Section;
