import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    let url =
      "https://apipeekameet.cloudzmall.com/peekameet/api/v1/public/user/login";
    axios
      .post(url, authData)
      .then((response) => {
        // dataFactory(response);
        const apiResponse = response.data.data[0].customer || {};
        console.log(apiResponse);
        localStorage.setItem("id", apiResponse._id);
        localStorage.setItem("token", apiResponse.token);
        localStorage.setItem("tagline", apiResponse.tagline);
        console.log(apiResponse.tagline);
        localStorage.setItem("firstName", apiResponse.firstName);
        localStorage.setItem("lastName", apiResponse.lastName);
        localStorage.setItem("jobTitle", apiResponse.jobTitle);
        localStorage.setItem("company", apiResponse.company);
        console.log("@@" + apiResponse.company);
        localStorage.setItem("languages", apiResponse.languages[0]);
        localStorage.setItem("industry", apiResponse.industry[0]);
        localStorage.setItem(
          "orgaisations&groups",
          apiResponse.organisationGroups[0]
        );
        localStorage.setItem(
          "interest&activities",
          apiResponse.interestActivities[0]
        );
        localStorage.setItem("alumni", apiResponse.alumni[0]);
        console.log(apiResponse.alumni[0]);
        localStorage.setItem("email", apiResponse.email);
        localStorage.setItem("website", apiResponse.website);
        localStorage.setItem("businessPhone", apiResponse.businessPhone);
        localStorage.setItem("businessAddress", apiResponse.businessAddress);
        localStorage.setItem("profileImage", apiResponse.profileImage.url);
        dispatch(authSuccess());
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
