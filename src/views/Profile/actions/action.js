import { PROFILE_DATA_ERROR, PROFILE_DATA_LOADING_ENDS, PROFILE_DATA_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';
import { getLoggedInUser } from 'layouts/actions/action';
import { removeModal } from 'utils/removeModal';

const service_url = process.env.SERVICE_URL

export const updateProfile = (data) => {
  return async(dispatch) => {
    try {
      dispatch({type: PROFILE_DATA_LOADING_STARTS})
      const response = await axios.put(`${service_url}/user/update`, data)
      .then(() => {
        dispatch(getLoggedInUser());
        dispatch({type: PROFILE_DATA_LOADING_ENDS})
        removeModal('edit_profile')
        notify('Profile updated successfully!')
      })
    } catch (error) {
      dispatch({type: PROFILE_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status == 422) {
          dispatch({type: PROFILE_DATA_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status == 500) {
          dispatch({type: PROFILE_DATA_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}