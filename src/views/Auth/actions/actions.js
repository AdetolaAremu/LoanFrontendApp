import axios from "axios";
import jwtdecode from "jwt-decode";
import setAuthToken from "utils/setAuthToken";
import { notify } from "utils/notification";
import process from "env";
import ROUTE from "Routes/routes.json";
import { AUTH_LOADING_ENDS, AUTH_LOADING_STARTS } from "./types";
import { REDIRECT_TO } from "stats/statType";

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
      const { access_token } = response.data;
      localStorage.setItem("jwtToken", access_token);
      setAuthToken(access_token);
      const decoded =  jwtdecode(access_token);
      
      dispatch(setCurrentUser(decoded));
      dispatch({type: AUTH_LOADING_ENDS});
      dispatch({type: REDIRECT_TO, payload:ROUTE.DASHBOARD});
    } catch (error) {
      dispatch({type: AUTH_LOADING_ENDS});
    }
  }
}