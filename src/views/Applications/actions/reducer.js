import {DATA_ERROR, GET_DATA, DATA_LOADING_STARTS, DATA_LOADING_ENDS, CLEAR_DATA_ERROR} from './types'

const INITIAL_STATE = {
    loading: false,
    data:[],
    error:{}
 }
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_LOADING_STARTS:
            return {
                ...state,
                loading:true
            }
        case GET_DATA:
            return {
                ...state,
                data:action.payload
            }
        case DATA_LOADING_ENDS:
                return {
                    ...state,
                    loading:false
                }

        case DATA_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case CLEAR_DATA_ERROR:
            return {
                ...state,
                error:{}
            }
        default:
            return state
    }
 }