import React from "react";
import classes from "./Button.css";

const button = (props) => {
  let cssClasses = [classes.Button, classes[props.btnType]].join(" ");

  if (props.btnType === "userProfile1" || props.btnType === "userProfile2") {
    cssClasses = [classes.userProfile, classes[props.btnType]].join(" ");
  }
  //   if (props.btnType === "addButton1" || props.btnType === "addButton2") {
  //     cssClasses = [classes.Medium, classes[props.Color]].join(" ");
  //   }
  return (
    <button
      disabled={props.disabled}
      className={cssClasses}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
