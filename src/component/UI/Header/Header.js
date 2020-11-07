import React from "react";
import classes from "./Header.css";
import Button from "../Button/Button";
import Image from "../Image/Image";
import { NavLink } from "react-router-dom";

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
        <Image type="userProfileHeader" />
        <button className={classes.myProfile}></button>
      </nav>
    );
  }
  if (props.type === "addNotes") {
    header = (
      <nav className={classes.SignupHeader}>
        <ul>
          <li>
            <span className={classes.addNoteslogo}></span>PEEKaMEET
          </li>
          <li>
            <NavLink
              to="/userProfile/notes/add_notes/home"
              activeStyle={{
                color: "rgb(255, 255, 255)",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>Contacts</li>
          <li>Message</li>
          <li>Scan</li>
          <li>The Movement</li>
          <li>Notifications</li>
          <li>|||</li>
        </ul>
      </nav>
    );
  }
  return <div>{header}</div>;
};

export default Header;
