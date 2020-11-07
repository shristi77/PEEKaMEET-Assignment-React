import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import authReducer from "./store/reducers/auth";
import addNotesReducer from "./store/reducers/addNotes";
import fetchNotesReducer from "./store/reducers/fetchNotes";
import deleteNotesReducer from "./store/reducers/deleteNotes";
import editNotesReducer from "./store/reducers/editNotes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  addNotes: addNotesReducer,
  fetchNotes: fetchNotesReducer,
  deleteNotes: deleteNotesReducer,
  editNotes: editNotesReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
