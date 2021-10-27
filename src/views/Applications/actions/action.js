import {CLEAR_APPLICATION_ERROR, GET_APPLICATION_ERROR, GET_KYC_DATA, GET_KYC_SINGLE_DATA, KYC_DATA_LOADING_ENDS, KYC_DATA_LOADING_STARTS} from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';

const service_url = process.env.SERVICE_URL

const getPendingKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}pending/kyc`)
      if (response === 200) {
        dispatch({type: KYC_DATA_LOADING_ENDS})
        dispatch({type: GET_KYC_DATA, payload:response.data.data})
      }
    } catch (error) {
      dispatch({type: KYC_DATA_LOADING_ENDS, payload:error})

      // if (error.response) {
      //   if (error.response.status == 422) {
      //     dispatch({type: GET_APPLICATION_ERROR, payload:error})
      //     return notify('There are errors in your input', 'error')
      //   } else if (error.response.status == 500) {
      //     dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
      //   } else {
      //     return notify('Sorry, something went wrong!', 'err')
      //   }
      // } else {
      //   return notify('Sorry, something went wrong! Check your network', 'err')
      // }
    }
  }
}

const getAcceptedKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}accpeted/kyc`)
      if (response === 200) {
        dispatch({type: KYC_DATA_LOADING_ENDS})
        dispatch({type: GET_KYC_DATA, payload:response.data.data})
      }
    } catch (error) {
      dispatch({type: KYC_DATA_LOADING_ENDS, payload:error})
    }
  }
}