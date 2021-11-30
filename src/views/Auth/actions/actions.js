import axios from "axios";
import jwtdecode from "jwt-decode";
import setAuthToken from "utils/setAuthToken";
import { notify } from "utils/notification";
import process from "env.js"
import CONSTANTS from "Routes/routes.json"
import { AUTH_LOADING_ENDS, AUTH_LOADING_STARTS, CHECK_USER_ROLE, GET_AUTH_ERROR, SET_CURRENT_USER } from "./types";

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
      notify(response?.data?.message);
      window.location.href = CONSTANTS.LOAN_APPLICATION;
      dispatch(setCurrentUser(decoded));
      dispatch({type: CHECK_USER_ROLE});
      dispatch({type: AUTH_LOADING_ENDS});
    } catch (error) {
      dispatch({type: AUTH_LOADING_ENDS});
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_AUTH_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if(error.response.status === 400){
          dispatch({type: GET_AUTH_ERROR, payload:error.response})
          return notify('Email and password do not match', 'error')
        } else if (error.response.status === 500) {
          return notify('An internal error occured, we are working on it!')
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
    }
  }
}

export const registerNewUser = (userData) => dispatch =>{
  dispatch({ type:AUTH_LOADING_STARTS });
  axios.post(`${service_url}/register`, userData)
  .then(()=>{
    dispatch({ type: AUTH_LOADING_ENDS })
    // notify("Registration successful, you can now login");
    window.location.href = CONSTANTS.LOGIN_SUCCESS;
  }).catch((error) => {
    dispatch({type: AUTH_LOADING_ENDS});
    if (error.response) {
      if (error.response.status === 422) {
        dispatch({type: GET_AUTH_ERROR, payload:error.response})
        return notify('There are errors in your input', 'error')
      } else if (error.response.status === 500) {
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
  .then(() => {
    localStorage.clear();
    window.location.href = CONSTANTS.LOGIN
  }).catch((error) => {
    dispatch({type: AUTH_LOADING_ENDS});
  })
}