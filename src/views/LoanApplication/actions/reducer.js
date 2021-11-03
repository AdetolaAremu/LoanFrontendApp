import { GET_LOAN_TYPE_DATA, GET_LOAN_TYPE_DATA_ERROR, CLEAR_LOAN_TYPE_DATA_ERROR, LOAN_TYPE_DATA_LOADING_ENDS, LOAN_TYPE_DATA_LOADING_STARTS } from 'views/LoanType/actions/types'

const INITIAL_STATE = {
    loading: false,
    loanData:[],
    error:{}
 }
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAN_TYPE_DATA_LOADING_STARTS:
            return {
                ...state,
                loading:true
            }
        case GET_LOAN_TYPE_DATA:
            return {
                ...state,
                loanData:action.payload
            }
        case LOAN_TYPE_DATA_LOADING_ENDS:
                return {
                    ...state,
                    loading:false
                }

        case GET_LOAN_TYPE_DATA_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case CLEAR_LOAN_TYPE_DATA_ERROR:
            return {
                ...state,
                error:{}
            }
        default:
            return state
    }
 }