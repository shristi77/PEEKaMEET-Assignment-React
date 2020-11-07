import React, { Component } from "react";
// import classes from './App.css';
import SignupPage from "./component/SignupPage/SignupPage";
import UserProfile from "./component/UserProfile/UserProfile";
import { Redirect, Route, Switch } from "react-router-dom";
// import Details from "./component/Details/Details";
// import Notes from "./component/Notes/Notes";
import AddNotes from "./component/Notes/AddNotes/AddNotes";
// import EditNotes from "./component/Notes/EditNotes/EditNotes";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/userProfile/notes/edit_notes/:id/:date/:time/:noteText"
          component={AddNotes}
        />
        <Route path="/userProfile/notes/add_notes" component={AddNotes} />
        <Route path="/userProfile/details" component={UserProfile} />
        <Route path="/signup" component={SignupPage} />
        <Redirect to="/signup" />
      </Switch>
    );
  }
}

export default App;
