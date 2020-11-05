import React from "react";
import classes from "./Note.css";

const Note = (props) => {
  let date = "";

  if (typeof props.dateTime !== "undefined") {
    const formattedDateTime = new Date(props.dateTime);

    date =
      formattedDateTime.getHours() +
      ":" +
      formattedDateTime.getMinutes() +
      "  " +
      formattedDateTime.toDateString();
  }
  return (
    <div className={classes.Note}>
      <div className={classes.outerDiv}>
        <div className={classes.one}>{props.children}</div>
        <div className={classes.two}>...</div>
      </div>
      <div className={classes.dateTime}>{date}</div>
    </div>
  );
};

export default Note;
