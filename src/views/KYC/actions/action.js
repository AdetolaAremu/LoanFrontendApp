import { GET_A_KYC_DATA, GET_KYC_DATA, KYC_DATA_LOADING_ENDS, KYC_DATA_LOADING_STARTS, GET_KYC_DATA_ERROR } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';
import { getLoggedInKYC } from 'layouts/actions/action';

const service_url = process.env.SERVICE_URL

export const getKYCData = () => {
  return async(dispatch) => {
    try {
      dispatch({type: KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/user/verify`)
        dispatch({type: KYC_DATA_LOADING_ENDS})
        dispatch({type: GET_KYC_DATA, payload:response.data})
      
    } catch (error) {
      dispatch({type: KYC_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_KYC_DATA_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_KYC_DATA_ERROR, payload:error.response})
        } else if(error.response.status === 401) {
          return notify("You are unauthorized!")
        } else {
          return notify('Sorry, something went wrong!', 'err')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'err')
      }
    }
  }
}

export const createKYCApplication = (KYCData) => {
  return async(dispatch) => {
    try {
      dispatch({type: KYC_DATA_LOADING_STARTS})
      const res = await axios.post(`${service_url}/user/verify`, KYCData)
      .then(() => {
        dispatch(getLoggedInKYC())
        dispatch({type: KYC_DATA_LOADING_ENDS})
        notify(res?.data?.message);
      })
    } catch (error) {
      dispatch({type: KYC_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error?.response?.status === 422) {
          dispatch({type: GET_KYC_DATA_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if (error?.response?.status === 500) {
          dispatch({type: GET_KYC_DATA_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
    }
  }
}

export const getSingleKYCData = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/user/verify/${id}`)
        dispatch({type: KYC_DATA_LOADING_ENDS})
        dispatch({type: GET_A_KYC_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: KYC_DATA_LOADING_ENDS, payload:error})
    }
  }
}