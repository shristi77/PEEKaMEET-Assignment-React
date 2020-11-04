import React from "react";
import classes from "./Profile.css";
import Button from "../../UI/Button/Button";
import Image from "../../UI/Image/Image";
import { NavLink, Route, Switch } from "react-router-dom";
import Details from "../../Details/Details";
import Notes from "../../Notes/Notes";

const Profile = (props) => {
  const name =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
  const jobTitle = localStorage.getItem("jobTitle");
  const company = localStorage.getItem("company");
  console.log(props.props);
  //   const businessAddress = localStorage.getItem("businessAddress");
  // console.log(company);
  return (
    <div className={classes.Profile}>
      <div className={classes.green}></div>
      <div className={classes.profilepic}></div>
      <div className={[classes.center, classes.name].join(" ")}>{name}</div>
      <div className={[classes.center, classes.jobTitle].join(" ")}>
        {jobTitle}
      </div>
      <div className={[classes.center, classes.company].join(" ")}>
        {company}
      </div>
      <div>
        <Button btnType="userProfile1">Share</Button>
        <Button btnType="userProfile2">Edit Profile</Button>
      </div>
      <Image type="playButton" />

      <div className={classes.navLink}>
        <NavLink
          className={classes.nav1}
          to="/userProfile/details"
          activeStyle={{ borderBottom: "3px solid #14b349 " }}
        >
          Details
        </NavLink>
        <NavLink
          className={classes.nav2}
          to="/userProfile/notes"
          activeStyle={{ borderBottom: "3px solid #14b349 " }}
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
