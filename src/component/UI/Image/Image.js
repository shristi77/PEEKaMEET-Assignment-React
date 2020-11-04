import React from 'react';
import signupImg from '../../../assests/SignUpPageSectionImages/signup.png';

import facebook from '../../../assests/SocialMediaLogo/Facebook/facebook-box-fill.png';
import instagram from '../../../assests/SocialMediaLogo/Instagram/instagram-fill.png';
import twitter from '../../../assests/SocialMediaLogo/Twitter/twitter-fill.png';
import youtube from '../../../assests/SocialMediaLogo/Youtube/youtube-fill.png';

import add from '../../../assests/MobileHeaderLogo/add/add.png';
import group from '../../../assests/MobileHeaderLogo/group/group-copy.png';
import menuline from '../../../assests/MobileHeaderLogo/menuline/menu-line.png';
import share from '../../../assests/MobileHeaderLogo/share/share-24-px.png';

import playButton from '../../../assests/UserProfile/Play Button/play-circle-filled.png';

import classes from './Image.css';


const Image = (props) => {
    let images = null;
    if(props.type === 'signupHeader'){
        images = <img src={signupImg}
        className={classes.SignupBack} 
        alt="SignupLogo"/>
    }
    else if(props.type === 'footer'){
        let imagesArr = [instagram ,youtube , facebook , twitter];
        images = imagesArr.map(
            image =>
                <img 
                    src={image} 
        className={classes.footerImage} 
                    alt={image} 
                    key={image}
                />      
        )
    } 
    else if(props.type === 'userProfileHeader'){
        let imagesArr = [add ,share , group , menuline];
        images = imagesArr.map(
            image =>
                <img 
                    src={image} 
                    className={classes.userProfileHeader} 
                    alt={image} 
                    key={image}
                />      
        )
    }
    else if( props.type === 'playButton'){
        images = <img src={playButton} className={classes.playButton} alt="Play Button" />
    }
    return images;
}

export default Image;