import React, { useState } from "react";
import classes from "./SideNavbar.css";
// import { NavLink, Route, Switch } from "react-router-dom";

const SideNavbar = (props) => {
  const [ishidden, setishidden] = useState(true);

  const clickHandler = () => {
    setishidden(!ishidden);
    // console.log(ishidden);
  };

  return (
    <div>
      <div
        className={
          ishidden
            ? [classes.overlay, classes.none].join(" ")
            : [classes.overlay, classes.block].join(" ")
        }
        onClick={clickHandler}
      >
        <div className={classes.text}>
          <button className={classes.item}>View All</button>
          <button className={classes.item} onClick={props.editHandler}>
            Edit
          </button>
          <button className={classes.item} onClick={props.deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      <div className={classes.button}>
        <button onClick={clickHandler}>...</button>
      </div>
    </div>
  );
};

export default SideNavbar;
