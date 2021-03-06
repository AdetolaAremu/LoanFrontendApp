import { DASHBOARD_DATA_LOADING_ENDS, DASHBOARD_DATA_LOADING_STARTS, GET_DASHBOARD_DATA, GET_KYC_DATA } from './types'
import axios from 'axios';
import process from 'env.js';

const service_url = process.env.SERVICE_URL

export const getLoggedInUser = () => {
  return async(dispatch) => {
    try {
      dispatch({type: DASHBOARD_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/user/currentuser`)
      dispatch({type: DASHBOARD_DATA_LOADING_ENDS})
      dispatch({type: GET_DASHBOARD_DATA, payload:response.data.data})
    } catch (error) {
      dispatch({type: DASHBOARD_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const getLoggedInKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: DASHBOARD_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/mykyc`)
      dispatch({type: DASHBOARD_DATA_LOADING_ENDS})
      dispatch({type: GET_KYC_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: DASHBOARD_DATA_LOADING_ENDS, payload:error})
    }
  }
}