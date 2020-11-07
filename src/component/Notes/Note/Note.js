import React from "react";
import classes from "./Note.css";
import SideNavbar from "../../SideNavbar/SideNavbar";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
// import AddNotes from "../AddNotes/AddNotes";
import { useHistory } from "react-router-dom";

const Note = (props) => {
  let dateAndTime = "";
  let date = "";
  let time = "";
  const history = useHistory();

  if (typeof props.dateTime !== "undefined") {
    const formattedDateTime = new Date(props.dateTime);

    dateAndTime =
      formattedDateTime.getHours() +
      ":" +
      formattedDateTime.getMinutes() +
      ":" +
      formattedDateTime.getSeconds() +
      "  " +
      formattedDateTime.toDateString();

    date =
      formattedDateTime.getFullYear() +
      "-" +
      (formattedDateTime.getMonth() + 1) +
      "-" +
      formattedDateTime.getDate();

    console.log("Date ---", date);

    time =
      formattedDateTime.getHours() +
      ":" +
      formattedDateTime.getMinutes() +
      ":" +
      formattedDateTime.getSeconds();

    console.log("Time-----", time);
  }

  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  const editHandler = () => {
    console.log("@@noteText ", props.noteText);

    history.push(
      `/userProfile/notes/edit_notes/${props.id}/${date}/${time}/${props.noteText}`
    );
  };

  const deleteHandler = () => {
    console.log("DeleteHandler Running");
    history.push(`/userProfile/notes/delete_notes/${props.id}`);
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
    // editError: state.editNotes.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteNotes: () => dispatch(actions.deleteNotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
