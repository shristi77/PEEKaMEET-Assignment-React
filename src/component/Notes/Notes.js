import React, { useEffect, useState } from "react";
import classes from "./Notes.css";
import { NavLink } from "react-router-dom";
// import AddNotes from "./AddNotes/AddNotes";
import Note from "./Note/Note";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Notes = (props) => {
  const [end, setend] = useState(10);

  const handleScroll = (event) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) {
      setend(end + 10);
      console.log("BOTTOM REACHED:", bottom, "  END: ", end, "START :", 0);
    }
  };

  const note = props.notes.slice(0, end).map((note) => (
    <Note
      key={note.id}
      dateTime={note.dateTime}
      id={note._id}
      noteText={note.noteText}
    >
      {note.noteText}
    </Note>
  ));

  useEffect(() => {
    props.onfetchNotes();
  }, []);

  return (
    <div>
      <NavLink className={classes.nav} to="/userProfile/notes/add_notes">
        Add Notes
      </NavLink>
      <div className={classes.Note} onScroll={handleScroll}>
        {note}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.addNotes.error,
    notes: state.fetchNotes.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchNotes: () => dispatch(actions.fetchNotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
