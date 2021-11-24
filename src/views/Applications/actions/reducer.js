import { GET_DASHBOARD_DATA } from 'layouts/actions/types'
import {ADMIN_GET_KYC_DATA, ADMIN_GET_KYC_SINGLE_DATA, ADMIN_GET_LOAN_DATA, ADMIN_KYC_DATA_LOADING_ENDS, ADMIN_KYC_DATA_LOADING_STARTS, ADMIN_LOAN_DATA_LOADING_ENDS, ADMIN_LOAN_DATA_LOADING_STARTS, APPLICATION_LOADING_ENDS, APPLICATION_LOADING_STARTS, CLEAR_APPLICATION_ERROR, GET_ADMIN_LOAN_SINGLE_DATA, GET_APPLICATION_DATA, GET_APPLICATION_ERROR} from './types'

const INITIAL_STATE = {
    applicationLoading:false,
    applicationData:[],
    error:{},
    singleLoanData:{},
    singleKYCData:{},
    adminDashboardData:[]
 }
 
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADMIN_KYC_DATA_LOADING_STARTS:
            return {
                ...state,
                applicationLoading:true
            }
        case ADMIN_KYC_DATA_LOADING_ENDS:
                return {
                    ...state,
                    applicationLoading:false
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
                applicationLoading:true
            }
        case ADMIN_LOAN_DATA_LOADING_ENDS:
                return {
                    ...state,
                    applicationLoading:false
                }
        case GET_APPLICATION_DATA:
            return {
                ...state,
                applicationData:action.payload
            }
        case GET_ADMIN_LOAN_SINGLE_DATA:
            return {
                ...state,
                singleLoanData:action.payload
            }
        case GET_DASHBOARD_DATA:
            return {
                ...state,
                adminDashboardData:action.payload
            }
        case APPLICATION_LOADING_STARTS:
            return {
                ...state,
                applicationLoading:true
            }
        case APPLICATION_LOADING_ENDS:
                return {
                    ...state,
                    applicationLoading:false
                }
        default:
            return state
    }
 }