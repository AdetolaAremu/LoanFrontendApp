import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';
import { ADMIN_DASHBOARD_DATA_LOADING_ENDS, ADMIN_DASHBOARD_DATA_LOADING_STARTS, GET_ADMIN_DASHBOARD_DATA, GET_ALL_USERS_COUNT, GET_LAST_FIVE_USERS, GET_ERROR, MODAL_DATA_LOADING_ENDS, MODAL_DATA_LOADING_STARTS } from './types';

const service_url = process.env.SERVICE_URL


export const dashboardCount = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_DASHBOARD_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/dashboard-count`)
      dispatch({type: ADMIN_DASHBOARD_DATA_LOADING_ENDS})
      dispatch({type: GET_ADMIN_DASHBOARD_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_DASHBOARD_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status == 500) {
           dispatch({type: GET_ERROR, payload:error.response})
         } else if(error.response.status == 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const allUsersCount = () => {
  return async(dispatch) => {
    try {
      dispatch({type: MODAL_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/users`)
      dispatch({type: MODAL_DATA_LOADING_ENDS})
      dispatch({type: GET_ALL_USERS_COUNT, payload:response.data})
    } catch (error) {
      dispatch({type: MODAL_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status == 500) {
           dispatch({type: GET_ERROR, payload:error.response})
         } else if(error.response.status == 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// last five registered users
export const lastFiveUsers = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_DASHBOARD_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/users`)
      dispatch({type: ADMIN_DASHBOARD_DATA_LOADING_ENDS})
      dispatch({type: GET_LAST_FIVE_USERS, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_DASHBOARD_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status == 500) {
           dispatch({type: GET_ERROR, payload:error.response})
         } else if(error.response.status == 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}