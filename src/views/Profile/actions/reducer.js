import { CLEAR_PROFILE_DATA_ERROR, GET_PROFILE_DATA, PROFILE_DATA_ERROR, PROFILE_DATA_LOADING_ENDS, PROFILE_DATA_LOADING_STARTS } from './types'

const INITIAL_STATE = {
    profileLoading: false,
    profileData:[],
    error:{}
 }
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_DATA_LOADING_STARTS:
            return {
                ...state,
                profileLoading:true
            }
        case GET_PROFILE_DATA:
            return {
                ...state,
                profileData:action.payload
            }
        case PROFILE_DATA_LOADING_ENDS:
            return {
                ...state,
                profileLoading:false
            }
        case PROFILE_DATA_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case CLEAR_PROFILE_DATA_ERROR:
            return {
                ...state,
                error:{}
            }
        default:
            return state
    }
 }