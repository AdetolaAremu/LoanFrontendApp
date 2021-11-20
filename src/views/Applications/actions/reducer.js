import {ADMIN_GET_KYC_DATA, ADMIN_GET_KYC_SINGLE_DATA, ADMIN_GET_LOAN_DATA, ADMIN_KYC_DATA_LOADING_ENDS, ADMIN_KYC_DATA_LOADING_STARTS, ADMIN_LOAN_DATA_LOADING_ENDS, ADMIN_LOAN_DATA_LOADING_STARTS, CLEAR_APPLICATION_ERROR, GET_ADMIN_LOAN_SINGLE_DATA, GET_APPLICATION_ERROR} from './types'

const INITIAL_STATE = {
    loadingAdminKYC: false,
    loadingAdminLoan:false,
    adminKYCData:[],
    adminLoanData:[],
    error:{},
    singleLoanData:{},
    singleKYCData:{}
 }
 
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADMIN_KYC_DATA_LOADING_STARTS:
            return {
                ...state,
                loadingAdminKYC:true
            }
        case ADMIN_KYC_DATA_LOADING_ENDS:
                return {
                    ...state,
                    loadingAdminKYC:false
                }
        case ADMIN_GET_KYC_DATA:
            return {
                ...state,
                adminKYCData:action.payload
            }
        case ADMIN_GET_KYC_SINGLE_DATA:
            return {
                ...state,
                singleKYCData:action.payload
            }
        case GET_APPLICATION_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case CLEAR_APPLICATION_ERROR:
            return {
                ...state,
                error:{}
            }
        case ADMIN_LOAN_DATA_LOADING_STARTS:
            return {
                ...state,
                loadingAdminLoan:true
            }
        case ADMIN_LOAN_DATA_LOADING_ENDS:
                return {
                    ...state,
                    loadingAdminLoan:false
                }
        case ADMIN_GET_LOAN_DATA:
            return {
                ...state,
                adminLoanData:action.payload
            }
        case GET_ADMIN_LOAN_SINGLE_DATA:
            return {
                ...state,
                singleLoanData:action.payload
            }
        default:
            return state
    }
 }