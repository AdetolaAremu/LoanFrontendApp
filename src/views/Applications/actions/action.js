import {ADMIN_GET_KYC_DATA, ADMIN_GET_LOAN_DATA, ADMIN_KYC_DATA_LOADING_ENDS, ADMIN_KYC_DATA_LOADING_STARTS, ADMIN_LOAN_DATA_LOADING_ENDS, ADMIN_LOAN_DATA_LOADING_STARTS, CLEAR_APPLICATION_ERROR, GET_APPLICATION_ERROR, GET_KYC_DATA, GET_KYC_SINGLE_DATA, GET_LOAN_DATA, KYC_DATA_LOADING_ENDS, KYC_DATA_LOADING_STARTS } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';
import { GET_DASHBOARD_DATA } from 'layouts/actions/types';

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
      .then((response) => {
        dispatch(getPendingLoanApplication())
        return notify('Loan Approved')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const rejectLoan = (id, data) => {
  return async(dispatch) => {
    try {
      const response = await axios.put(`${service_url}/loan-application/reject/${id}`, data)
      .then((response) => {
        dispatch(getPendingLoanApplication())
        return notify('Loan rejected')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const recycleLoan = (id, data) => {
  return async(dispatch) => {
    try {
      const response = await axios.put(`${service_url}/loan-application/recycle/${id}`, data)
      .then((response) => {
        dispatch(getRejectedLoanApplication())
        return notify('Loan recycled')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

// kyc status and approvals

export const getPendingKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/kyc/pending`)
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS})
      dispatch({type: ADMIN_GET_KYC_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const getApprovedKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/kyc/successful`)
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS})
      dispatch({type: ADMIN_GET_KYC_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS, payload:error})
    }
  }
}


export const getRejectedKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/kyc/failed`)
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS})
      dispatch({type: ADMIN_GET_KYC_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS, payload:error})
    }
  }
}


export const approveKYC = (id, data) => {
  return async(dispatch) => {
    try {
      const response = await axios.put(`${service_url}/user/verify/approve/${id}`, data)
      .then((response) => {
        dispatch(getPendingKYC())
        return notify('KYC Approved')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const rejectKYC = (id, data) => {
  return async(dispatch) => {
    try {
      const response = await axios.put(`${service_url}/user/verify/reject/${id}`, data)
      .then((response) => {
        dispatch(getPendingKYC())
        return notify('KYC rejected')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const recycleKYC = (id, data) => {
  return async(dispatch) => {
    try {
      const response = await axios.put(`${service_url}/user/verify/recycle/${id}`, data)
      .then((response) => {
        dispatch(getRejectedKYC())
        return notify('KYC recycled')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

// All applications count

export const countKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/kyc-count`)
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS})
      dispatch({type: ADMIN_GET_KYC_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS, payload:error})
    }
  }
}

export const countLoan = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan-count`)
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS})
      dispatch({type: ADMIN_GET_LOAN_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}

// dashboard counts
export const dashboardCount = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/dashboard-count`)
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS})
      dispatch({type: GET_DASHBOARD_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
    }
  }
}