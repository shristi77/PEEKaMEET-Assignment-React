import React from "react";
import classes from "./Section.css";
import SignupSection from "./SignupSection/SignupSection";
import Element from "../../UI/Elements/Element";
import backgroundImg from "../../../assests/SignUpPageSectionImages/signup.png";

const Section = (props) => {
  const rectangles = [
    { text: "Freelancer", color: "Orange" },
    { text: "Job Seeker", color: "Purple" },
    { text: "Enterpreneur", color: "Green" },
    { text: "Mompreneur", color: "Pink" },
    { text: "Internship Seeker", color: "Blue" },
    { text: "Environmental Change Maker", color: "Red" },
  ];
  return (
    <div>
      <section className={classes.Section}>
        <div>
          <img src={backgroundImg} alt="backgroundImg"></img>
        </div>
        <div className={classes.section2}>
          <p className={classes.para1}>
            <span className={classes.peekameet}>PEEKaMEET</span> lets you
            network more effectively to achieve your business and career goals
          </p>
          <div className={classes.container}>
            {rectangles.map((element) => (
              <Element key={element.text} Color={element.color}>
                {element.text}
              </Element>
            ))}
          </div>
          <p className={classes.para2}>
            Build and manage your network with PEEKaMEET
          </p>
          <SignupSection />
        </div>
      </section>
    </div>
  );
};

export default Section;
