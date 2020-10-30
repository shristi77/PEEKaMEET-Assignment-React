import React from 'react';
import signupImg from '../../../../assests/SignUpPageSectionImages/signup.png';
import signupImg2x from '../../../../assests/SignUpPageSectionImages/signup@2x.png';
import signupImg3x from '../../../../assests/SignUpPageSectionImages/signup@3x.png';
import classes from './Image.css';


const Image = (props) => {
    // let set = [signupImg2x , signupImg3x].join(',')
    return (
        <div>
            <img src={signupImg}
                // srcSet={set}
                className={classes.SignupBack} 
                alt="SignupLogo"/>
        </div>
    )
}

export default Image;