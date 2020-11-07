import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  error: null,
};

const editNotesStart = (state, action) => {
  return updateObject(state, { error: null });
};

const editNotesSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};

const editNotesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_NOTES_START:
      return editNotesStart(state, action);
    case actionTypes.EDIT_NOTES_SUCCESS:
      return editNotesSuccess(state, action);
    case actionTypes.EDIT_NOTES_FAIL:
      return editNotesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
