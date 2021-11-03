import { GET_LOAN_DATA, GET_LOAN_TYPE_DATA, LOAN_DATA_LOADING_ENDS, LOAN_DATA_LOADING_STARTS, LOAN_TYPE_DATA_LOADING_ENDS, LOAN_TYPE_DATA_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';

const service_url = process.env.SERVICE_URL

export const getTypeLoanData = () => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan-types`)
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS})
      dispatch({type: GET_LOAN_TYPE_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})

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
