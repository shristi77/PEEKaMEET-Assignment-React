import React from "react";
import classes from "./Button.css";

const button = (props) => {
  let cssClasses = [classes.Button, classes[props.btnType]].join(" ");

  if (props.isactive) {
    cssClasses = [classes.Button, classes[props.btnType], classes.active].join(
      " "
    );
  }

  if (props.btnType === "userProfile1" || props.btnType === "userProfile2") {
    cssClasses = [classes.userProfile, classes[props.btnType]].join(" ");
  }

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
