import { ADMIN_DASHBOARD_DATA_LOADING_ENDS, ADMIN_DASHBOARD_DATA_LOADING_STARTS, GET_ADMIN_DASHBOARD_DATA, GET_ALL_USERS_COUNT, GET_ERROR, GET_LAST_FIVE_USERS, MODAL_DATA_LOADING_ENDS, MODAL_DATA_LOADING_STARTS } from './types'

const INITIAL_STATE = {
    adminDataLoading: false,
    modalData:false,
    adminStats:[],
    allUsersStats:[],
    lastfiveUsers:[],
    error:{}
 }
 
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADMIN_DASHBOARD_DATA_LOADING_STARTS:
            return {
                ...state,
                adminDataLoading:true
            }
        case ADMIN_DASHBOARD_DATA_LOADING_ENDS:
            return {
                ...state,
                adminDataLoading:false
            }
        case MODAL_DATA_LOADING_STARTS:
            return {
                ...state,
                modalData:true
            }
        case MODAL_DATA_LOADING_ENDS:
            return {
                ...state,
                modalData:false
            }
        case GET_ADMIN_DASHBOARD_DATA:
            return {
                ...state,
                adminStats:action.payload
            }
        case GET_ALL_USERS_COUNT:
            return {
                ...state,
                allUsersStats:action.payload
            }
        case GET_LAST_FIVE_USERS:
            return {
                ...state,
                lastfiveUsers:action.payload
            }
        case GET_ERROR:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
 }