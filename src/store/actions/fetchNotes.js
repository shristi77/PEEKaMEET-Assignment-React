import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchNotesStart = () => {
  return {
    type: actionTypes.FETCHNOTES_START,
  };
};

export const fetchNotesSuccess = (note) => {
  // console.log("---- ", note);
  return {
    type: actionTypes.FETCHNOTES_SUCCESS,
    notes: note,
  };
};

export const fetchNotesFail = (error) => {
  return {
    type: actionTypes.FETCHNOTES_FAIL,
    error: error,
  };
};
export const fetchNotes = () => {
  return (dispatch) => {
    dispatch(fetchNotesStart());
    const token = localStorage.getItem("token");
    const createdFor = localStorage.getItem("id");
    // console.log((skip - 1) * 10);

    let url = `https://apipeekameet.cloudzmall.com/peekameet/api/v1/followUpNotes`;
    axios
      .get(url, {
        headers: {
          Authorization: `${token}`,
        },
        params: {
          createdFor: `${createdFor}`,
          limit: "100",
          // skip: `${(skip - 1) * 10}`,
        },
      })
      .then((response) => {
        // console.log(response);
        // console.log(response.data.data[0].docs);
        console.log("Data Successfully fetched");
        const note = response.data.data[0].docs;
        console.log("note", note);
        console.log("date", note[65].dateTime);
        dispatch(fetchNotesSuccess(note));
      })
      .catch((err) => {
        dispatch(fetchNotesFail(err));
      });
  };
};
