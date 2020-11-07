import React from "react";
import classes from "./Footer.css";
import facebook from "../../../assests/SocialMediaLogo/Facebook/facebook-box-fill.png";
import instagram from "../../../assests/SocialMediaLogo/Instagram/instagram-fill.png";
import twitter from "../../../assests/SocialMediaLogo/Twitter/twitter-fill.png";
import youtube from "../../../assests/SocialMediaLogo/Youtube/youtube-fill.png";

const Footer = (props) => {
  return (
    <div>
      <footer className={classes.Footer}>
        <div className={classes.logoText}>PEEKaMEET&copy;2020</div>
        <div>Follow Us: </div>
        <div className={classes.Img}>
          <img src={instagram} alt={instagram}></img>
        </div>
        <div className={classes.Img}>
          <img src={youtube} alt={youtube}></img>
        </div>
        <div className={classes.Img}>
          <img src={facebook} alt={facebook}></img>
        </div>
        <div className={classes.Img}>
          <img src={twitter} alt={twitter}></img>
        </div>
        <div className={classes.links}>FAQs</div>
        <div className={classes.links}>Terms &amp; Conditions</div>
        <div className={classes.links}>Privacy Policy</div>
        <div className={classes.links}>About Us</div>
        <div className={classes.links}>Press</div>
        <div className={classes.links}>Contact Us</div>
        <div className={classes.links}>Perks</div>
        <div className={classes.links}>Blog</div>
      </footer>
    </div>
  );
};

export default Footer;
