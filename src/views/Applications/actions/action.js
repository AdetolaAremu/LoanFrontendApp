import {ADMIN_GET_KYC_DATA, ADMIN_GET_LOAN_DATA, ADMIN_KYC_DATA_LOADING_ENDS, ADMIN_KYC_DATA_LOADING_STARTS, ADMIN_LOAN_DATA_LOADING_ENDS, ADMIN_LOAN_DATA_LOADING_STARTS, CLEAR_APPLICATION_ERROR, GET_APPLICATION_ERROR, GET_KYC_DATA, GET_KYC_SINGLE_DATA, GET_LOAN_DATA, KYC_DATA_LOADING_ENDS, KYC_DATA_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';

const service_url = process.env.SERVICE_URL

export const getPendingLoanApplication = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan/pending`)
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS})
      dispatch({type: ADMIN_GET_LOAN_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const getRejectedLoanApplication = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan/failed`)
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS})
      dispatch({type: ADMIN_GET_LOAN_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const getAcceptedLoanApplication = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan/accepted`)
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS})
      dispatch({type: ADMIN_GET_LOAN_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}


export const approveLoan = (id, data) => {
  return async(dispatch) => {
    try {
      const response = await axios.put(`${service_url}/loan-application/approve/${id}`, data)
      if (response === 200) {
        return notify('Loan approved successfully')
      }
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const rejectLoan = (id, data) => {
  return async(dispatch) => {
    try {
      const response = await axios.put(`${service_url}/loan-application/reject/${id}`, data)
      if (response === 200) {
        return notify('Loan rejected')
      }
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const getPendingKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/kyc/pending`)
      if (response === 200) {
        dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS})
        dispatch({type: ADMIN_GET_KYC_DATA, payload:response.data.data})
      }
    } catch (error) {
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS, payload:error})
    }
  }
}

// const getAcceptedKYC = () => {
//   return async(dispatch) => {
//     try {
//       dispatch({type: KYC_DATA_LOADING_STARTS})
//       const response = await axios.get(`${service_url}accpeted/kyc`)
//       if (response === 200) {
//         dispatch({type: KYC_DATA_LOADING_ENDS})
//         dispatch({type: GET_KYC_DATA, payload:response.data.data})
//       }
//     } catch (error) {
//       dispatch({type: KYC_DATA_LOADING_ENDS, payload:error})
//     }
//   }
// }