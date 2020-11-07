import React from "react";
import classes from "./Element.css";

const Element = (props) => {
  return (
    <div className={[classes.Rectangle, classes[props.Color]].join(" ")}>
      {props.children}
    </div>
  );
};

export default Element;
