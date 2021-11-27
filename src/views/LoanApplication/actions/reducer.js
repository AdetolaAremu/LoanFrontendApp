import { GET_LOAN_DATA_ERROR, CLEAR_LOAN_DATA_ERROR, LOAN_DATA_LOADING_ENDS, LOAN_DATA_LOADING_STARTS, GET_LOAN_DATA, GET_A_LOAN_DATA } from 'views/LoanApplication/actions/types'
import { CRUD_OPERATIONS_ENDS, CRUD_OPERATIONS_STARTS, VIEW_SINGLE_LOAN_LOADING_ENDS, VIEW_SINGLE_LOAN_LOADING_STARTS } from './types'

const INITIAL_STATE = {
    loanloading: false,
    viewLoanLoading:false,
    crud: false,
    loanData:[],
    singleLoan:{},
    errors:{}
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
        case VIEW_SINGLE_LOAN_LOADING_STARTS:
            return {
                ...state,
                viewLoanLoading:true
            }
        case VIEW_SINGLE_LOAN_LOADING_ENDS:
            return {
                ...state,
                viewLoanLoading:false
            }
        case CRUD_OPERATIONS_STARTS:
            return {
                ...state,
                crud:true
            }
        case CRUD_OPERATIONS_ENDS:
            return {
                ...state,
                crud:false
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
                errors:action.payload
            }
        case CLEAR_LOAN_DATA_ERROR:
            return {
                ...state,
                errors:{}
            }
        default:
            return state
    }
 }