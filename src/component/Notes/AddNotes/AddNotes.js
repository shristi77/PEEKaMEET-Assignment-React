import React, { useState } from "react";
import classes from "./AddNotes.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
// import { useHistory } from "react-router-dom";

const AddNotes = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const createdFor = localStorage.getItem("id");
    const timestamp = Date.parse(date + " " + time);
    props.onAddNotes(createdFor, text, timestamp);
  };

  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
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
            {errorMessage}
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
    error: state.addNotes.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNotes: (createdFor, text, timestamp) =>
      dispatch(actions.addNotes(createdFor, text, timestamp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNotes);
