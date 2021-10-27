import {CLEAR_APPLICATION_ERROR, GET_APPLICATION_ERROR, GET_KYC_DATA, GET_KYC_SINGLE_DATA, KYC_DATA_LOADING_ENDS, KYC_DATA_LOADING_STARTS} from './types'

const INITIAL_STATE = {
    loading: false,
    data:[],
    error:{},
    singleData:{}
 }
 
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KYC_DATA_LOADING_STARTS:
            return {
                ...state,
                loading:true
            }
        case KYC_DATA_LOADING_ENDS:
                return {
                    ...state,
                    loading:false
                }
        case GET_KYC_DATA:
            return {
                ...state,
                data:action.payload
            }
        case GET_KYC_SINGLE_DATA:
            return {
                ...state,
                singleData:action.payload
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
        default:
            return state
    }
 }