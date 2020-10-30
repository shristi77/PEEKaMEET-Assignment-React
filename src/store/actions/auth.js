import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
        };
        let url = 'https://apipeekameet.cloudzmall.com/peekameet/api/v1/public/user/login';
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess());
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

