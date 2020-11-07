import React from "react";
import Header from "../UI/Header/Header";
import Section from "./Section/Section";
import Footer from "../UI/Footer/Footer";
import classes from "./SignupPage.css";

const SignupPage = (props) => {
  return (
    <div className={classes.Signup}>
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default SignupPage;
