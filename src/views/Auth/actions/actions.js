import axios from "axios";
import jwtdecode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";
import setAuthToken from "utils/setAuthToken";
import { notify } from "utils/notification";
import process from "env.js"
import CONSTANTS from "Routes/routes.json"
import { AUTH_LOADING_ENDS, AUTH_LOADING_STARTS, CHECK_USER_ROLE, GET_AUTH_ERROR, GET_LOGGED_IN_USER_DETAILS, REDIRECT_TO, SET_CURRENT_USER } from "./types";
// import { REDIRECT_TO } from "stats/statType";

const service_url = process.env.SERVICE_URL

export const setCurrentUser = (decoded) => {
  return {
      type: SET_CURRENT_USER,
      payload: decoded,
  };
};

export const loginUser = (userData) => {
  return async(dispatch) => {
    try {
      dispatch({type: AUTH_LOADING_STARTS});
      const response = await axios.post(`${service_url}/login`, userData);
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(localStorage.jwtToken);
      const decoded =  jwtdecode(token);
      window.location.href = CONSTANTS.DASHBOARD;
      dispatch(setCurrentUser(decoded));
      dispatch({type: CHECK_USER_ROLE});
      dispatch({type: AUTH_LOADING_ENDS});
    } catch (error) {
      dispatch({type: AUTH_LOADING_ENDS});
      if (error.response) {
        if (error.response.status == 422) {
          dispatch({type: GET_AUTH_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status == 500) {
          dispatch({type: GET_AUTH_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const registerNewUser = (userData) => dispatch =>{
  dispatch({ type:AUTH_LOADING_STARTS });
  axios.post(`${service_url}/login`, userData)
  .then(()=>{
    dispatch({ type: AUTH_LOADING_ENDS })
    window.location.href = CONSTANTS.LOGIN;
    return notify("Registration successful, you can now login");
  }).catch((error) => {
    dispatch({type: AUTH_LOADING_ENDS});
    if (error.response) {
      if (error.response.status == 422) {
        dispatch({type: GET_AUTH_ERROR, payload:error})
        return notify('There are errors in your input', 'error')
      } else if (error.response.status == 500) {
        dispatch({type: GET_AUTH_ERROR, payload:error.response})
      } else {
        return notify('Sorry, something went wrong!', 'error')
      }
    } else {
      return notify('Sorry, something went wrong! Check your network', 'error')
    }
  })
}

export const logoutUser = (userData) => dispatch =>{
  dispatch({ type:AUTH_LOADING_STARTS });
  axios.post(`${service_url}/logout`, userData)
  .then(()=>{
    localStorage.clear()
    window.location.href = CONSTANTS.LOGIN
    return notify("Registration successful, you can now login");
  }).catch((error) => {
    dispatch({type: AUTH_LOADING_ENDS});
  })
}