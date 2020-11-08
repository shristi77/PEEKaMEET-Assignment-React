import React from "react";
import classes from "./Note.css";
import SideNavbar from "../../SideNavbar/SideNavbar";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Note = (props) => {
  let dateAndTime = "";

  const history = useHistory();

  if (typeof props.dateTime !== "undefined") {
    const DateTime = new Date(props.dateTime);

    dateAndTime =
      DateTime.getHours() +
      ":" +
      DateTime.getMinutes() +
      ":" +
      DateTime.getSeconds() +
      "  " +
      DateTime.toDateString();
  }

  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  const editHandler = () => {
    history.push(`/userProfile/notes/edit/${props.id}`);
  };

  const deleteHandler = () => {
    props.onDeleteNotes(props.id);
    props.onfetchNotes();
  };

  return (
    <div className={classes.Note}>
      <div className={classes.outerDiv}>
        <div className={classes.one}>{props.noteText}</div>
        {errorMessage}
        <SideNavbar
          deleteHandler={deleteHandler}
          id={props.id}
          editHandler={editHandler}
        ></SideNavbar>
      </div>
      <div className={classes.dateTime}>{dateAndTime}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deleteError: state.deleteNotes.error,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {{ f}
//     onDeleteNotes: (id) => dispatch(actions.deleteNotes(id)),
//   };
// };

const mapDispatchToProps = {
  onDeleteNotes: actions.deleteNotes,
  onfetchNotes: actions.fetchNotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
