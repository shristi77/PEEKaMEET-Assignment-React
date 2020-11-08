import React, { useState } from "react";
// import classes from './SignupSection.css';
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import * as actions from "../../../../store/actions/index";
import { connect } from "react-redux";
import classes from "./SignupSection.css";
import { useHistory } from "react-router-dom";

const SignupSection = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(email, password);
    history.push("/userProfile");
  };

  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }
  return (
    <div>
      {errorMessage}
      <form onSubmit={submitHandler}>
        <Input
          inputType="email"
          inputLabel="Email"
          inputValue={email}
          changed={(event) => setEmail(event.target.value)}
        ></Input>
        <Input
          inputType="password"
          inputLabel="Password"
          inputValue={password}
          changed={(event) => setPassword(event.target.value)}
        ></Input>
        <div className={classes.button}>
          <Button btnType="Big" isactive>
            Sign In
          </Button>
        </div>
        <div className={classes.div}>
          <input type="checkbox" className={classes.checkbox} />
          <label className={classes.remember}>Remember Me</label>
          <a href="/" className={classes.forgot}>
            Forgot Password
          </a>
        </div>
        <div className={classes.div2}>
          Don’t have an account? <a href="/">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSection);
