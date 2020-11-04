import React from "react";
import classes from "./Notes.css";
import { NavLink, Switch, Routes, Route } from "react-router-dom";
import AddNotes from "./AddNotes/AddNotes";

const Notes = (props) => {
  return (
    <div>
      {/* <div className={classes.green}>Add Notes</div> */}
      <NavLink className={classes.nav} to="/userProfile/notes/add_notes">
        Add Notes
      </NavLink>
    </div>
  );
};

export default Notes;
