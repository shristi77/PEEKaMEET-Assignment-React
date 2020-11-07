import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  error: null,
};

const addNotesStart = (state, action) => {
  return updateObject(state, { error: null });
};

const addNotesSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
  });
};

const addNotesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTES_START:
      return addNotesStart(state, action);
    case actionTypes.ADD_NOTES_SUCCESS:
      return addNotesSuccess(state, action);
    case actionTypes.ADD_NOTES_FAIL:
      return addNotesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
