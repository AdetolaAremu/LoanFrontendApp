import { PROFILE_DATA_LOADING_ENDS, PROFILE_DATA_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';
import { getLoggedInUser } from 'layouts/actions/action';

const service_url = process.env.SERVICE_URL

export const updateProfile = (data) => {
  return async(dispatch) => {
    try {
      dispatch({type: PROFILE_DATA_LOADING_STARTS})
      await axios.put(`${service_url}/user/update`, data)
      dispatch(getLoggedInUser());
      dispatch({type: PROFILE_DATA_LOADING_ENDS})
    } catch (error) {
      dispatch({type: PROFILE_DATA_LOADING_ENDS, payload:error})
    }
  }
}