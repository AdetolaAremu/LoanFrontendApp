import { GET_A_LOAN_DATA, GET_LOAN_DATA, LOAN_DATA_LOADING_ENDS, LOAN_DATA_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import CONSTANTS from 'Routes/routes.json'
import { notify } from 'utils/notification';
import { GET_LOAN_SINGLE_DATA } from 'views/Applications/actions/types';

const service_url = process.env.SERVICE_URL

export const getLoanData = () => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan-application`)
        dispatch({type: LOAN_DATA_LOADING_ENDS})
        dispatch({type: GET_LOAN_DATA, payload:response.data})
      
    } catch (error) {
      dispatch({type: LOAN_DATA_LOADING_ENDS, payload:error})
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

export const createLoanApplication = (loanData) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_DATA_LOADING_STARTS})
      const response = await axios.post(`${service_url}/loan-application`, loanData)
      if (response === 200) {
        dispatch({type: LOAN_DATA_LOADING_ENDS})
        return notify("Loan created successfully");
        // dispatch({type: GET_LOAN_DATA, payload:response.data})
      }
    } catch (error) {
      dispatch({type: LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const getSingleLoanData = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan-application/${id}`)
      dispatch({type: LOAN_DATA_LOADING_ENDS})
      dispatch({type: GET_A_LOAN_DATA, payload:response.data})     
    } catch (error) {
      dispatch({type: LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}