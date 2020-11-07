import React, { useState } from "react";
import classes from "./AddNotes.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
// import { useHistory } from "react-router-dom";

const AddNotes = (props) => {
  console.log(props);
  let dateval = "";
  let timeval = "";
  let textval = "";

  if (
    props.match.path ===
    "/userProfile/notes/edit_notes/:id/:date/:time/:noteText"
  ) {
    dateval = props.match.params.date;
    timeval = props.match.params.time;
    textval = props.match.params.noteText;
  }

  const [date, setDate] = useState(dateval);
  const [time, setTime] = useState(timeval);
  const [text, setText] = useState(textval);
  console.log("@@date", date);
  console.log("@@time", time);
  console.log("@@text", text);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("@@date", date);
    console.log("@@time", time);
    const createdFor = localStorage.getItem("id");
    const timestamp = Date.parse(date + " " + time);
    if (
      props.match.path ===
      "/userProfile/notes/edit_notes/:id/:date/:time/:noteText"
    ) {
      props.onEditNotes(props.match.params.id, text, timestamp);
    } else {
      props.onAddNotes(createdFor, text, timestamp);
    }
  };

  let AdderrorMessage = null;

  if (props.addError) {
    AdderrorMessage = <p>{props.error.message}</p>;
  }
  let EditerrorMessage = null;

  if (props.editError) {
    EditerrorMessage = <p>{props.error.message}</p>;
  }
  return (
    <div className={classes.container}>
      <Header type="addNotes" />
      <div className={classes.wrapper}>
        <div className={classes.add}>
          <div className={classes.addHeader}>Add Note</div>
          <div>
            <span className={classes.logo}>....</span>Name
          </div>
          <div>
            {AdderrorMessage}
            {EditerrorMessage}
            <form onSubmit={submitHandler}>
              <div>
                <label className={classes.headings}>Follow Up Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                />
              </div>
              <div>
                <label className={classes.headings}>Time</label>
                <input
                  type="time"
                  step="1"
                  value={time}
                  onChange={(event) => {
                    setTime(event.target.value);
                  }}
                />
              </div>
              <div>
                <label className={classes.headings}>Notes</label>
                <textarea
                  placeholder="Write Here"
                  cols="52"
                  value={text}
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                />
              </div>
              <div>
                <button className={classes.whiteButton} type="reset">
                  Cancel
                </button>
                <button className={classes.greenButton} type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer type="signupFooter" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addError: state.addNotes.error,
    editError: state.editNotes.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNotes: (createdFor, text, timestamp) =>
      dispatch(actions.addNotes(createdFor, text, timestamp)),
    onEditNotes: (id, text, timestamp) =>
      dispatch(actions.editNotes(id, text, timestamp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNotes);
