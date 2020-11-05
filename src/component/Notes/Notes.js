import React from "react";
import classes from "./Notes.css";
import { NavLink } from "react-router-dom";
// import AddNotes from "./AddNotes/AddNotes";
import Note from "./Note/Note";

const Notes = (props) => {
  return (
    <div>
      <NavLink className={classes.nav} to="/userProfile/notes/add_notes">
        Add Notes
      </NavLink>
      <Note />
    </div>
  );
};

export default Notes;
