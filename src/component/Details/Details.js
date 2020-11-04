import React from "react";
import classes from "./Details.css";
import Element from "../../component/UI/Elements/Element";
import Aux from '../../hoc/Aux/Aux';

const Details = (props) => {
    const tagline = localStorage.getItem("tagline");
    const orgaisationsAndGroups = localStorage.getItem("orgaisations&groups");
    const industry = localStorage.getItem("industry");
    const interestAndactivities = localStorage.getItem("interest&activities");
    const alumni = localStorage.getItem("alumni");
    const languages = localStorage.getItem("languages");
    const email = localStorage.getItem("email");
    const website = localStorage.getItem("website");
    const businessPhone = localStorage.getItem("businessPhone");
  return (
    <Aux>
      <div className={classes.tagline}>
        <span className={classes.greentext}>"</span>
        {tagline}
        <span className={classes.greentext}>"</span>
      </div>
      <p className={[classes.center, classes.about].join(" ")}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five{" "}
        <span className={classes.greentext2}>More.</span>
      </p>

      <div className={classes.head1}>
        <p className={classes.headings}>Industry(s)</p>
        <Element Color="Orange">{industry}</Element>
      </div>
      <div className={classes.head2}>
        <p className={classes.headings}>Organisations and Groups</p>
        <Element Color="Purple">{orgaisationsAndGroups}</Element>
      </div>
      <div className={classes.head3}>
        <p className={classes.headings}>Interests and Activities</p>
        <Element Color="Green">{interestAndactivities}</Element>
      </div>
      <div className={classes.head4}>
        <p className={classes.headings}>Alumni</p>
        <Element Color="Pink">{alumni}</Element>
      </div>
      <div className={classes.head5}>
        <p className={classes.headings}>Languages</p>
        <Element Color="Blue">{languages}</Element>
      </div>
      <div className={[classes.greentext2, classes.info1].join(" ")}>
        {email}
      </div>
      <div className={[classes.greentext2, classes.info2].join(" ")}>
        {website}
      </div>
      <div className={[classes.greentext2, classes.info3].join(" ")}>
        {businessPhone}
      </div>

      <div className={classes.head6}>
        <p className={classes.headings}>Business Address</p>
        {/* {businessAddress} */}
        <p className={classes.address}>
          A Digital Agency<br />
          123 Sycamore Dr<br />
          Torrington CT, 06790
        </p>
      </div>
    </Aux>
  );
};

export default Details;
