import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addNotesStart = () => {
  return {
    type: actionTypes.ADDNOTES_START,
  };
};

export const addNotesSuccess = () => {
  return {
    type: actionTypes.ADDNOTES_SUCCESS,
  };
};

export const addNotesFail = (error) => {
  return {
    type: actionTypes.ADDNOTES_FAIL,
    error: error,
  };
};

export const addNotes = (createdFor, text, dateTime) => {
  return (dispatch) => {
    dispatch(addNotesStart());
    const authData = {
      createdFor: createdFor,
      type: "followup",
      noteText: text,
      dateTime: dateTime,
    };

    const token = localStorage.getItem("token");

    let url =
      "https://apipeekameet.cloudzmall.com/peekameet/api/v1/followUpNote";
    axios
      .post(url, authData, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(addNotesSuccess());
      })
      .catch((err) => {
        dispatch(addNotesFail(err));
      });
  };
};
