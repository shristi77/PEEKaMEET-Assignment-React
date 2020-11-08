import React from "react";
import classes from "./Profile.css";
import Button from "../../UI/Button/Button";
import playButton from "../../../assests/UserProfile/Play Button/play-circle-filled.png";
import { NavLink, Route, Switch } from "react-router-dom";
import Details from "../../Details/Details";
import Notes from "../../Notes/Notes";

const Profile = (props) => {
  const navlinkStyling = {
    borderBottom: "5px solid #14b349 ",
    padding: "0px 3px 5px 3px",
  };

  const name =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
  const jobTitle = localStorage.getItem("jobTitle");
  const company = localStorage.getItem("company");

  return (
    <div className={classes.Profile}>
      <div className={classes.disc}>
        <div className={classes.green}></div>
        <div className={classes.profilepic}></div>
      </div>
      <div>
        <div className={[classes.common, classes.name].join(" ")}>{name}</div>
        <div className={[classes.common, classes.jobTitle].join(" ")}>
          {jobTitle}
        </div>
        <div className={[classes.common, classes.company].join(" ")}>
          {company}
        </div>
      </div>
      <div className={classes.playButton}>
        <img src={playButton} alt="playButtonIcon"></img>
      </div>
      <div style={{ margin: "0px 9px 0px 9px" }}>
        <Button btnType="Medium">Share</Button>
        <Button btnType="Medium">Edit Profile</Button>
      </div>
      <div className={classes.navLink}>
        <NavLink
          className={classes.nav1}
          to="/userProfile/details"
          activeStyle={navlinkStyling}
        >
          Details
        </NavLink>
        <NavLink
          className={classes.nav2}
          to="/userProfile/notes"
          activeStyle={navlinkStyling}
        >
          Notes
        </NavLink>
      </div>
      <Switch>
        <Route path="/userProfile/details" component={Details} />
        <Route path="/userProfile/notes" component={Notes} />
      </Switch>
    </div>
  );
};

export default Profile;
