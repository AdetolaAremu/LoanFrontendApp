import { GET_KYC_DATA_ERROR, CLEAR_KYC_DATA_ERROR, KYC_DATA_LOADING_ENDS, KYC_DATA_LOADING_STARTS, GET_KYC_DATA, GET_A_KYC_DATA } from './types'

const INITIAL_STATE = {
    KYCloading: false,
    KYCData:[],
    singleKYC:{},
    error:{}
 }

 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KYC_DATA_LOADING_STARTS:
            return {
                ...state,
                KYCloading:true
            }
        case GET_KYC_DATA:
            return {
                ...state,
                KYCData:action.payload
            }
        case GET_A_KYC_DATA:
            return {
                ...state,
                singleKYC:action.payload
            }
        case KYC_DATA_LOADING_ENDS:
                return {
                    ...state,
                    KYCloading:false
                }

        case GET_KYC_DATA_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case CLEAR_KYC_DATA_ERROR:
            return {
                ...state,
                error:{}
            }
        default:
            return state
    }
 }