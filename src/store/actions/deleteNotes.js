import axios from "axios";
import * as actionTypes from "./actionTypes";

export const deleteNotesStart = () => {
  return {
    type: actionTypes.DELETE_NOTES_START,
  };
};

export const deleteNotesSuccess = () => {
  return {
    type: actionTypes.DELETE_NOTES_SUCCESS,
    // notes: note,
  };
};

export const deleteNotesFail = (error) => {
  return {
    type: actionTypes.DELETE_NOTES_FAIL,
    error: error,
  };
};
export const deleteNotes = (id) => {
  return (dispatch) => {
    dispatch(deleteNotesStart());
    const token = localStorage.getItem("token");

    let url = `https://apipeekameet.cloudzmall.com/peekameet/api/v1/followUpNote/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(deleteNotesSuccess());
      })
      .catch((err) => {
        dispatch(deleteNotesFail(err));
      });
  };
};
