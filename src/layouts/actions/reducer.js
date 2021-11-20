import { DASHBOARD_DATA_LOADING_ENDS, DASHBOARD_DATA_LOADING_STARTS, GET_DASHBOARD_DATA } from './types'

const INITIAL_STATE = {
    dashboardDataLoading: false,
    dashboardData:[],
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
                dashboardData:action.payload
            }
        default:
            return state
    }
 }