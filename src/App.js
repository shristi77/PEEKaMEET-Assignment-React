import React, { Component } from 'react';
// import classes from './App.css';
import SignupPage from './component/SignupPage/SignupPage';
import UserProfile from './component/UserProfile/UserProfile';
import { Redirect, Route , Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/userProfile" exact component={UserProfile} />
          <Route path="/signup" component={SignupPage} />
          <Redirect to="/signup" />
      </Switch>
    );
  }
}

export default App;
