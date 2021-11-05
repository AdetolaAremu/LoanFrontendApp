import { DASHBOARD_DATA_LOADING_ENDS, DASHBOARD_DATA_LOADING_STARTS, GET_DASHBOARD_DATA } from './types'

const INITIAL_STATE = {
    dashboardDataLoading: false,
    data:[],
 }
 
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DASHBOARD_DATA_LOADING_STARTS:
            return {
                ...state,
                dashboardDataLoading:true
            }
        case DASHBOARD_DATA_LOADING_ENDS:
            return {
                ...state,
                dashboardDataLoading:false
                }
        case GET_DASHBOARD_DATA:
            return {
                ...state,
                data:action.payload
            }
        // case GET_KYC_SINGLE_DATA:
        //     return {
        //         ...state,
        //         singleData:action.payload
        //     }
        // case GET_APPLICATION_ERROR:
        //     return {
        //         ...state,
        //         error:action.payload
        //     }
        // case CLEAR_APPLICATION_ERROR:
        //     return {
        //         ...state,
        //         error:{}
        //     }
        default:
            return state
    }
 }