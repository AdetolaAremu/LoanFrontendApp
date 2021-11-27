import { CLEAR_LOAN_TYPE_DATA_ERROR, GET_LOAN_TYPE_DATA, GET_LOAN_TYPE_DATA_ERROR, LOAN_TYPE_DATA_LOADING_ENDS, LOAN_TYPE_DATA_LOADING_STARTS, DELETE_LOAN_TYPE, LOAN_TYPE_CRUD_OPERATIONS_STARTS, LOAN_TYPE_CRUD_OPERATIONS_ENDS, GET_SINGLE_LOAN_TYPE_DATA } from './types'

const INITIAL_STATE = {
    loading: false,
    loanTypeCRUD:false,
    loanTypeData:[],
    errors:{},
    deleteLoanType:undefined,
    singleLoanTypeData:{}
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
                loanTypeData:action.payload
            }
        case LOAN_TYPE_DATA_LOADING_ENDS:
                return {
                    ...state,
                    loading:false
                }

        case GET_LOAN_TYPE_DATA_ERROR:
            return {
                ...state,
                errors:action.payload
            }
        case CLEAR_LOAN_TYPE_DATA_ERROR:
            return {
                ...state,
                errors:{}
            }
        case DELETE_LOAN_TYPE:
            return{
                ...state,
                loanTypeData: state.loanTypeData.filter(item => item.id !== action.payload)
            }
        case LOAN_TYPE_CRUD_OPERATIONS_STARTS:
            return{
                ...state,
                loanTypeCRUD:true
            }
        case LOAN_TYPE_CRUD_OPERATIONS_ENDS:
            return{
                ...state,
                loanTypeCRUD:false
            }
        case GET_SINGLE_LOAN_TYPE_DATA:
            return{
                ...state,
                singleLoanTypeData:false
            }
        default:
            return state
    }
 }