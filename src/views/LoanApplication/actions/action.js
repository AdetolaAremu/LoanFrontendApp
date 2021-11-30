import { CRUD_OPERATIONS_ENDS, CRUD_OPERATIONS_STARTS, GET_A_LOAN_DATA, GET_LOAN_DATA, GET_LOAN_DATA_ERROR, LOAN_DATA_LOADING_ENDS, LOAN_DATA_LOADING_STARTS, VIEW_SINGLE_LOAN_LOADING_ENDS, VIEW_SINGLE_LOAN_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';
import { removeModal } from 'utils/removeModal';

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
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: GET_LOAN_DATA_ERROR, payload:error.response})
        } 
      } else {
        return notify('Sorry, something went wrong! Check your network', 'err')
      }
    }
  }
}

export const createLoanApplication = (loanData) => {
  return async(dispatch) => {
    try {
      dispatch({type: CRUD_OPERATIONS_STARTS})
     await axios.post(`${service_url}/loan-application`, loanData)
      .then(() => {
        dispatch({type: CRUD_OPERATIONS_ENDS})
        dispatch(getLoanData())
        removeModal('create_loan')
        notify('Loan created successfully!');
      })
    } catch (error) {
      dispatch({type: CRUD_OPERATIONS_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_LOAN_DATA_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_LOAN_DATA_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const getSingleLoanData = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: VIEW_SINGLE_LOAN_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan-application/${id}`)
      dispatch({type: VIEW_SINGLE_LOAN_LOADING_ENDS})
      dispatch({type: GET_A_LOAN_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: VIEW_SINGLE_LOAN_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: GET_LOAN_DATA_ERROR, payload:error.response})
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'err')
      }
    }
  }
}