import React, { Component } from "react";
import SignupPage from "./component/SignupPage/SignupPage";
import UserProfile from "./component/UserProfile/UserProfile";
import { Redirect, Route, Switch } from "react-router-dom";
import AddNotes from "./component/Notes/AddNotes/AddNotes";
import { connect } from "react-redux";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/" component={SignupPage} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route
            path="/userProfile/notes/edit/:id"
            exact
            component={AddNotes}
          />
          <Route
            path="/userProfile/notes/add-notes"
            exact
            component={AddNotes}
          />
          <Route path="/userProfile" component={UserProfile} />
          <Redirect to="/userProfile" />
        </Switch>
      );
    }

    return routes;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
