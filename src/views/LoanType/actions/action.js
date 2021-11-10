import { DELETE_LOAN_TYPE, GET_LOAN_DATA, GET_LOAN_TYPE_DATA, GET_SINGLE_LOAN_TYPE_DATA, LOAN_DATA_LOADING_ENDS, LOAN_DATA_LOADING_STARTS, LOAN_TYPE_CRUD_OPERATIONS_ENDS, LOAN_TYPE_CRUD_OPERATIONS_STARTS, LOAN_TYPE_DATA_LOADING_ENDS, LOAN_TYPE_DATA_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';
import { removeModal } from "utils/removeModal"

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
      await axios.post(`${service_url}/loan-types`, data)
      .then(() => {
        dispatch(getTypeLoanData())
        removeModal('add_type_modal')
        dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS})
        return notify("Loan type created successfully");
      })
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const deleteLoanType = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_STARTS})
      await axios.delete(`${service_url}/loan-types/${id}`)
      .then(() => {
        dispatch(getTypeLoanData())
        dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_ENDS})
        dispatch({type: DELETE_LOAN_TYPE, payload:id})
        return notify("Loan type deleted successfully");
      })
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const updateLoanType = (id, data) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_STARTS})
      const res = await axios.put(`${service_url}/loan-types/${id}`, data)
      if (res.status === 200) {
        dispatch(getTypeLoanData())
        removeModal('edit_type_modal')
        dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_ENDS})
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