import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  notes: [],
  error: null,
};

const fetchNotesStart = (state, action) => {
  return updateObject(state, { error: null });
};

const fetchNotesSuccess = (state, action) => {
  // console.log("@@ ", action.notes);

  return updateObject(state, {
    error: null,
    notes: action.notes,
  });
};

const fetchNotesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHNOTES_START:
      return fetchNotesStart(state, action);
    case actionTypes.FETCHNOTES_SUCCESS:
      return fetchNotesSuccess(state, action);
    case actionTypes.FETCHNOTES_FAIL:
      return fetchNotesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
