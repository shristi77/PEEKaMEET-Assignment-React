import axios from "axios";
import * as actionTypes from "./actionTypes";

export const editNotesStart = () => {
  return {
    type: actionTypes.EDIT_NOTES_START,
  };
};

export const editNotesSuccess = () => {
  return {
    type: actionTypes.EDIT_NOTES_SUCCESS,
  };
};

export const editNotesFail = (error) => {
  return {
    type: actionTypes.EDIT_NOTES_FAIL,
    error: error,
  };
};

export const editNotes = (id, text, dateTime) => {
  return (dispatch) => {
    dispatch(editNotesStart());
    const authData = {
      noteText: text,
      dateTime: dateTime,
    };

    const token = localStorage.getItem("token");

    let url = `https://apipeekameet.cloudzmall.com/peekameet/api/v1/followUpNote/${id}`;
    axios
      .put(url, authData, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log("Data Successfully Updated");
        console.log(response);
        dispatch(editNotesSuccess());
      })
      .catch((err) => {
        dispatch(editNotesFail(err));
      });
  };
};
