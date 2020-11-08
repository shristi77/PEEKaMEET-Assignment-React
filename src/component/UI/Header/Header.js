import React from "react";
import classes from "./Header.css";
import Button from "../Button/Button";
import add from "../../../assests/MobileHeaderLogo/add/add.png";
import group from "../../../assests/MobileHeaderLogo/group/group-copy.png";
import menuline from "../../../assests/MobileHeaderLogo/menuline/menu-line.png";
import share from "../../../assests/MobileHeaderLogo/share/share-24-px.png";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  let history = useHistory();

  const Logout = () => {
    props.logout();
    history.push("/");
  };

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
          <img src={add} alt="addIcon"></img>
        </div>
        <div className={classes.Img}>
          <img src={share} alt="shareIcon"></img>
        </div>
        <button className={classes.createImg} onClick={Logout}></button>
        <div className={classes.Img}>
          <img src={group} alt="groupIcon"></img>
        </div>
        <div className={classes.Img}>
          <img src={menuline} alt="menulineIcon"></img>
        </div>
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
        <button className={classes.createImg} onClick={Logout}></button>
      </nav>
    );
  }
  return <div>{header}</div>;
};

const mapDispatchtoProps = {
  logout: actions.logout,
};

export default connect(null, mapDispatchtoProps)(Header);
