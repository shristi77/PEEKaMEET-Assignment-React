import React from "react";
import classes from "./Note.css";

const Note = (props) => {
  return (
    <div className={classes.Note}>
      <div className={classes.outerDiv}>
        <div className={classes.one}>
            {props.children}
        </div>
        <div className={classes.two}>...</div>
      </div>
        <div className={classes.dateTime}>{props.dateTime}</div>
    </div>
  );
};

export default Note;
