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
    isAuthenticated: true,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
    isAuthenticated: false,
  };
};

export const logout = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("token");
  localStorage.removeItem("tagline");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("jobTitle");
  localStorage.removeItem("company");
  localStorage.removeItem("languages");
  localStorage.removeItem("industry");
  localStorage.removeItem("orgaisations&groups");
  localStorage.removeItem("interest&activities");
  localStorage.removeItem("alumni");
  localStorage.removeItem("email");
  localStorage.removeItem("website");
  localStorage.removeItem("businessPhone");
  localStorage.removeItem("businessAddress");
  localStorage.removeItem("profileImage");
  return {
    type: actionTypes.AUTH_LOGOUT,
    isAuthenticated: false,
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
        const apiResponse = response.data.data[0].customer || {};
        localStorage.setItem("id", apiResponse._id);
        localStorage.setItem("token", response.data.data[0].token);
        localStorage.setItem("tagline", apiResponse.tagline);
        localStorage.setItem("firstName", apiResponse.firstName);
        localStorage.setItem("lastName", apiResponse.lastName);
        localStorage.setItem("jobTitle", apiResponse.jobTitle);
        localStorage.setItem("company", apiResponse.company);
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
        localStorage.setItem("email", apiResponse.email);
        localStorage.setItem("website", apiResponse.website);
        localStorage.setItem("businessPhone", apiResponse.businessPhone);
        localStorage.setItem("businessAddress", apiResponse.businessAddress);
        // localStorage.setItem("profileImage", apiResponse.profileImage.url);
        console.log(response);
        dispatch(authSuccess());
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
