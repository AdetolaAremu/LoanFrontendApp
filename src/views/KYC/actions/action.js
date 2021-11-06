import { GET_A_KYC_DATA, GET_KYC_DATA, KYC_DATA_LOADING_ENDS, KYC_DATA_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import CONSTANTS from 'Routes/routes.json'
import { notify } from 'utils/notification';
import  { getLoggedInUser } from "layouts/actions/action"

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

export const createKYCApplication = (KYCData) => {
  return async(dispatch) => {
    try {
      dispatch({type: KYC_DATA_LOADING_STARTS})
      const response = await axios.post(`${service_url}/user/verify`, KYCData)
      dispatch( getLoggedInUser() )
      dispatch({type: KYC_DATA_LOADING_ENDS})
      return notify("KYC created successfully");
      // dispatch({type: GET_KYC_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: KYC_DATA_LOADING_ENDS, payload:error})
    }
  }
}

// export const getSingleKYCData = (id) => {
//   return async(dispatch) => {
//     try {
//       dispatch({type: KYC_DATA_LOADING_STARTS})
//       const response = await axios.get(`${service_url}/KYC-application/${id}`)
//       dispatch({type: KYC_DATA_LOADING_ENDS})
//       dispatch({type: GET_A_KYC_DATA, payload:response.data})     
//     } catch (error) {
//       dispatch({type: KYC_DATA_LOADING_ENDS, payload:error})
//     }
//   }
// }