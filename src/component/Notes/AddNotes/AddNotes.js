import React, { useState } from "react";
import classes from "./AddNotes.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { useHistory } from "react-router-dom";

const AddNotes = (props) => {
  console.log(props);
  let dateval = "";
  let timeval = "";
  let textval = "";
  let id = "";
  const history = useHistory();
  // console.log(23344, props.notes);

  const name =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");

  if (props.match.path === "/userProfile/notes/edit/:id") {
    id = props.match.params.id;
    for (let note of props.notes) {
      if (note.id === id) {
        textval = note.noteText;
        const DateTime = new Date(note.dateTime);
        let dateval =
          DateTime.getFullYear() +
          "-" +
          (DateTime.getMonth() + 1) +
          "-" +
          DateTime.getDate();

        console.log("Date ---", dateval);

        timeval =
          DateTime.getHours() +
          ":" +
          DateTime.getMinutes() +
          ":" +
          DateTime.getSeconds();

        console.log("Time-----", timeval);
      }
    }
  }

  const [date, setDate] = useState(dateval);
  const [time, setTime] = useState(timeval);
  const [text, setText] = useState(textval);

  const submitHandler = (event) => {
    event.preventDefault();
    const createdFor = localStorage.getItem("id");
    const timestamp = Date.parse(date + " " + time);
    if (props.match.path === "/userProfile/notes/edit/:id") {
      props.onEditNotes(props.match.params.id, text, timestamp);
      history.push("/userProfile/notes");
    } else {
      props.onAddNotes(createdFor, text, timestamp);
    }
  };

  let AdderrorMessage = null;

  if (props.addError) {
    AdderrorMessage = <p>{props.addError.message}</p>;
  }
  let EditerrorMessage = null;

  if (props.editError) {
    EditerrorMessage = <p>{props.editError.message}</p>;
  }

  const cancelHandler = (event) => {
    event.preventDefault();
    history.push("/userProfile/notes");
  };
  return (
    <div className={classes.container}>
      <Header type="addNotes" />
      <div className={classes.wrapper}>
        <div className={classes.add}>
          <div className={classes.addHeader}>Add Note</div>

          <div className={classes.info}>
            <div className={classes.logo}></div>
            <div className={classes.name}>{name}</div>
          </div>

          <div>
            {AdderrorMessage}
            {EditerrorMessage}
            <form
            // onSubmit={submitHandler}
            >
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
              <div style={{ marginBottom: "200px" }}>
                <button className={classes.whiteButton} onClick={cancelHandler}>
                  Cancel
                </button>
                <button
                  className={classes.greenButton}
                  type="submit"
                  onClick={submitHandler}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addError: state.addNotes.error,
    editError: state.editNotes.error,
    notes: state.fetchNotes.notes,
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
