import { DELETE_LOAN_TYPE, GET_LOAN_TYPE_DATA, GET_LOAN_TYPE_DATA_ERROR, GET_SINGLE_LOAN_TYPE_DATA, LOAN_TYPE_CRUD_OPERATIONS_ENDS, LOAN_TYPE_CRUD_OPERATIONS_STARTS, LOAN_TYPE_DATA_LOADING_ENDS, LOAN_TYPE_DATA_LOADING_STARTS } from './types'
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
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_LOAN_TYPE_DATA_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are not unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'errors')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
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
        notify('Loan type created successfully!');
        removeModal('add_type_modal')
      })
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_LOAN_TYPE_DATA_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_LOAN_TYPE_DATA_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const deleteLoanType = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_STARTS})
      const res = await axios.delete(`${service_url}/loan-types/${id}`)
      dispatch(getTypeLoanData())
      dispatch({type: DELETE_LOAN_TYPE, payload:id})
      notify(res?.data?.message);
      removeModal('delete_modal')
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_ENDS})
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_LOAN_TYPE_DATA_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_LOAN_TYPE_DATA_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const updateLoanType = (id, data) => {
  return async(dispatch) => {
    try {
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_STARTS})
      const res = await axios.put(`${service_url}/loan-types/${id}`, data)
      dispatch(getTypeLoanData())
      removeModal('edit_type_modal')
      notify(res.data.message);
      dispatch({type: LOAN_TYPE_CRUD_OPERATIONS_ENDS})
    } catch (error) {
      dispatch({type: LOAN_TYPE_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_LOAN_TYPE_DATA_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_LOAN_TYPE_DATA_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
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
      if (error.response) {
       if (error.response.status === 500) {
          dispatch({type: GET_LOAN_TYPE_DATA_ERROR, payload:error.response})
        } else if(error.response.status === 401){
          return notify("You are not unauthorized")
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}