import { ADMIN_GET_LOAN_DATA, ADMIN_KYC_DATA_LOADING_ENDS, ADMIN_KYC_DATA_LOADING_STARTS, ADMIN_LOAN_DATA_LOADING_ENDS, ADMIN_LOAN_DATA_LOADING_STARTS, APPLICATION_LOADING_ENDS, APPLICATION_LOADING_STARTS, GET_APPLICATION_DATA, GET_APPLICATION_ERROR } from './types'
import axios from 'axios';
import process from 'env.js';
import { notify } from 'utils/notification';
import { removeModal } from 'utils/removeModal';

const service_url = process.env.SERVICE_URL

export const getPendingLoanApplication = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan/pending`)
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS})
      dispatch({type: GET_APPLICATION_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const getRejectedLoanApplication = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan/failed`)
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS})
      dispatch({type: GET_APPLICATION_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const getAcceptedLoanApplication = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/loan/accepted`)
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS})
      dispatch({type: GET_APPLICATION_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const approveLoan = (id, data) => {
  return async(dispatch) => {
    try {
      await axios.put(`${service_url}/loan-application/approve/${id}`, data)
      .then(() => {
        dispatch(getPendingLoanApplication())
        removeModal('pending_loan')
        notify('Loan approved successfully')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const rejectLoan = (id, data) => {
  return async(dispatch) => {
    try {
      await axios.put(`${service_url}/loan-application/reject/${id}`, data)
      .then(() => {
        dispatch(getPendingLoanApplication())
        removeModal('pending_loan')
        notify('Loan rejected!')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const recycleLoan = (id, data) => {
  return async(dispatch) => {
    try {
      await axios.put(`${service_url}/loan-application/recycle/${id}`, data)
      .then(() => {
        dispatch(getRejectedLoanApplication())
        removeModal('rejected_loan')
        notify('Loan recycled successfully!')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
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
      dispatch({type: GET_APPLICATION_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const getApprovedKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/kyc/successful`)
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS})
      dispatch({type: GET_APPLICATION_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}


export const getRejectedKYC = () => {
  return async(dispatch) => {
    try {
      dispatch({type: ADMIN_KYC_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/kyc/failed`)
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS})
      dispatch({type: GET_APPLICATION_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: ADMIN_KYC_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const approveKYC = (id, data) => {
  return async(dispatch) => {
    try {
      await axios.put(`${service_url}/user/verify/approve/${id}`, data)
      .then(() => {
        dispatch(getPendingKYC())
        removeModal('pending_kyc')
        notify('KYC approved successfully!')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const rejectKYC = (id, data) => {
  return async(dispatch) => {
    try {
      await axios.put(`${service_url}/user/verify/reject/${id}`, data)
      .then(() => {
        dispatch(getPendingKYC())
        removeModal('pending_kyc')
        notify('KYC rejected!')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const recycleKYC = (id, data) => {
  return async(dispatch) => {
    try {
      await axios.put(`${service_url}/user/verify/recycle/${id}`, data)
      .then(() => {
        dispatch(getRejectedKYC())
        removeModal('rejected_kyc')
        notify('KYC recycled successfully!')
      })
    } catch (error) {
      dispatch({type: ADMIN_LOAN_DATA_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      } else {
        return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// All applications count

export const countStatus = () => {
  return async(dispatch) => {
    try {
      dispatch({type: APPLICATION_LOADING_STARTS})
      const response = await axios.get(`${service_url}/status-count`)
      dispatch({type: APPLICATION_LOADING_ENDS})
      dispatch({type: GET_APPLICATION_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: APPLICATION_LOADING_ENDS, payload:error})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
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
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
         } else if(error.response.status === 401){
            return notify("You are unauthorized")
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}