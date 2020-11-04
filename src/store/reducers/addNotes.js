import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  dateTime: 0,
  noteText: "",
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
    case actionTypes.AUTH_START:
      return addNotesStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return addNotesSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return addNotesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
