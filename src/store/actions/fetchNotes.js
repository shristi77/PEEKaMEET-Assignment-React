import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchNotesStart = () => {
  return {
    type: actionTypes.FETCH_NOTES_START,
  };
};

export const fetchNotesSuccess = (note) => {
  return {
    type: actionTypes.FETCH_NOTES_SUCCESS,
    notes: note,
  };
};

export const fetchNotesFail = (error) => {
  return {
    type: actionTypes.FETCH_NOTES_FAIL,
    error: error,
  };
};
export const fetchNotes = () => {
  return (dispatch) => {
    dispatch(fetchNotesStart());
    const token = localStorage.getItem("token");
    const createdFor = localStorage.getItem("id");

    let url = `https://apipeekameet.cloudzmall.com/peekameet/api/v1/followUpNotes`;
    axios
      .get(url, {
        headers: {
          Authorization: `${token}`,
        },
        params: {
          createdFor: `${createdFor}`,
          limit: "100",
        },
      })
      .then((response) => {
        const note = response.data.data[0].docs;
        dispatch(fetchNotesSuccess(note));
      })
      .catch((err) => {
        dispatch(fetchNotesFail(err));
      });
  };
};
