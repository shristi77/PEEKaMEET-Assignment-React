import React from "react";
import classes from "./Header.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import add from "../../../assests/MobileHeaderLogo/add/add.png";
import group from "../../../assests/MobileHeaderLogo/group/group-copy.png";
import menuline from "../../../assests/MobileHeaderLogo/menuline/menu-line.png";
import share from "../../../assests/MobileHeaderLogo/share/share-24-px.png";

const Header = (props) => {
  let isactive = true;
  let header = (
    <nav className={classes.Header}>
      <div className={classes.logo}></div>
      <div className={classes.logoText}>PEEKaMEET</div>
      <div className={classes.Button}>
        <Button btnType="Small" isactive>
          Sign In
        </Button>
        <Button btnType="Small">Sign Up</Button>
      </div>
    </nav>
  );
  if (props.type === "userProfile") {
    header = (
      <nav className={classes.userprofileHeader}>
        <div className={classes.logo}></div>
        <div className={classes.Img}>
          <img src={add} alt={add}></img>
        </div>
        <div className={classes.Img}>
          <img src={share} alt={share}></img>
        </div>
        <div className={classes.createImg}></div>
        <div className={classes.Img}>
          <img src={group} alt={group}></img>
        </div>
        <div className={classes.Img}>
          <img src={menuline} alt={menuline}></img>
        </div>
        {/* <button className={classes.myProfile}></button> */}
      </nav>
    );
  }
  if (props.type === "addNotes") {
    header = (
      <nav className={classes.addHeader}>
        <div className={classes.logo}></div>
        <div className={classes.logoText}>PEEKaMEET</div>
        <div className={classes.Home}>Home</div>
        <div className={classes.common}>Contacts</div>
        <div className={classes.common}>Message</div>
        <div className={classes.common}>Scan</div>
        <div className={classes.common}>The Movement</div>
        <div className={classes.common}>Notifications</div>
        <div className={classes.createImg}></div>
      </nav>
    );
  }
  return <div>{header}</div>;
};

export default Header;
