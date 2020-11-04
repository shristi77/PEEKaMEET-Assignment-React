import React from "react";
import classes from "./AddNotes.css";
import Header from "../../UI/Header/Header";

const AddNotes = (props) => {
  return (
    <div className={classes.container}>
      <Header type="addNotes" />
    </div>
  );
};

export default AddNotes;
