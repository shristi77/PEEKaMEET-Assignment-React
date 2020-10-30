import React, { Component } from 'react';
import classes from './App.css';
import SignupPage from './component/SignupPage/SignupPage';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <SignupPage />
      </div>
    );
  }
}

export default App;
