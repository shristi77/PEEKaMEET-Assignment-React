import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  error: null,
};

const deleteNotesStart = (state, action) => {
  return updateObject(state, { error: null });
};

const deleteNotesSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    // notes: action.notes,
  });
};

const deleteNotesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_NOTES_START:
      return deleteNotesStart(state, action);
    case actionTypes.DELETE_NOTES_SUCCESS:
      return deleteNotesSuccess(state, action);
    case actionTypes.DELETE_NOTES_FAIL:
      return deleteNotesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
