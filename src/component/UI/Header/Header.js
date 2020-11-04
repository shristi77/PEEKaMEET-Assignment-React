import React from "react";
import classes from "./Header.css";
import Button from "../Button/Button";
import Image from "../Image/Image";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let header = (
    <nav className={classes.SignupHeader}>
      <span className={classes.logo}></span>
      <span className={classes.peekameet}>PEEKaMEET</span>
      <div className={classes.button}>
        <Button className={classes.button} btnType="Small">
          Sign In
        </Button>
        <Button className={classes.button} btnType="Small">
          Sign Up
        </Button>
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
