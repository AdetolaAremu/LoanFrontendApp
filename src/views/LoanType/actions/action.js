import { DELETE_LOAN_TYPE, GET_LOAN_DATA, GET_LOAN_TYPE_DATA, GET_SINGLE_LOAN_TYPE_DATA, LOAN_DATA_LOADING_ENDS, LOAN_DATA_LOADING_STARTS, LOAN_TYPE_CRUD_OPERATIONS_ENDS, LOAN_TYPE_CRUD_OPERATIONS_STARTS, LOAN_TYPE_DATA_LOADING_ENDS, LOAN_TYPE_DATA_LOADING_STARTS } from './types'
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
    }
  }
}


export const createLoanTypeApplication = (data) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_DATA_LOADING_STARTS})
      const response = await axios.post(`${service_url}/loan-types`, data)
      if (response === 200) {
        dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS})
        return notify("Loan type created successfully");
        // dispatch({type: GET_LOAN_DATA, payload:response.data})
      }
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const deleteLoanType = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_STARTS})
      const res = await axios.delete(`${service_url}/loan-types/${id}`,)
      .then((res) => {
        dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_ENDS})
        dispatch({type: DELETE_LOAN_TYPE, payload:id})
        dispatch(getTypeLoanData())
        return notify("Loan type deleted successfully");
      })
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const updateLoanType = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_STARTS})
      const res = await axios.put(`${service_url}/loan-types/${id}`)
      if (res.status === 200) {
        dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_ENDS})
        dispatch(getTypeLoanData())
        return notify("Loan type updated successfully");
      }
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const getSingleLoanType = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_STARTS})
      const response = await axios.get(`${service_url}/loan-types/${id}`)
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS})
      dispatch({type: GET_SINGLE_LOAN_TYPE_DATA, payload:response.data})     
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
    }
  }
}