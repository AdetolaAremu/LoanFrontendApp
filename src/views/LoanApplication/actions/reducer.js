import { GET_LOAN_DATA_ERROR, CLEAR_LOAN_DATA_ERROR, LOAN_DATA_LOADING_ENDS, LOAN_DATA_LOADING_STARTS, GET_LOAN_DATA, GET_A_LOAN_DATA } from 'views/LoanApplication/actions/types'

const INITIAL_STATE = {
    loanloading: false,
    loanData:[],
    singleLoan:{},
    error:{}
 }

 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAN_DATA_LOADING_STARTS:
            return {
                ...state,
                loanloading:true
            }
        case GET_LOAN_DATA:
            return {
                ...state,
                loanData:action.payload
            }
        case GET_A_LOAN_DATA:
            return {
                ...state,
                singleLoan:action.payload
            }
        case LOAN_DATA_LOADING_ENDS:
                return {
                    ...state,
                    loanloading:false
                }

        case GET_LOAN_DATA_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case CLEAR_LOAN_DATA_ERROR:
            return {
                ...state,
                error:{}
            }
        default:
            return state
    }
 }