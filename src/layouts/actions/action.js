import { DASHBOARD_DATA_LOADING_ENDS, DASHBOARD_DATA_LOADING_STARTS, GET_DASHBOARD_DATA } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';

const service_url = process.env.SERVICE_URL

export const getLoggedInUser = () => {
  return async(dispatch) => {
    try {
      dispatch({type: DASHBOARD_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/user/currentuser`)
      dispatch({type: DASHBOARD_DATA_LOADING_ENDS})
      dispatch({type: GET_DASHBOARD_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: DASHBOARD_DATA_LOADING_ENDS, payload:error})
    }
  }
}