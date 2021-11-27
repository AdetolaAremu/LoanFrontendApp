import isEmpty from "utils/isEmpty";
import { AUTH_LOADING_ENDS, AUTH_LOADING_STARTS, SET_CURRENT_USER, ROLE_LOADING_STARTS, ROLE_LOADING_ENDS, CHECK_USER_ROLE, GET_LOGGED_IN_USER_DETAILS, GET_AUTH_ERROR } from "./types";

const init = {
  isAuthenticated:false,
  user: {},
  errors: {},
  permissions:{},
  user_role:"",
  loading:false,
  authLoading:false,
  loggedInUser:{}
};

export default function(state = init, action){
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case AUTH_LOADING_STARTS:
      return{
        ...state,
        authLoading:true
      }
    case AUTH_LOADING_ENDS:
      return {
        ...state,
        authLoading:false
      }
    case ROLE_LOADING_STARTS:
      return {
        ...state,
        loading:true,
      }
    case ROLE_LOADING_ENDS:
      return {
        ...state,
        loading:false
      }
    case CHECK_USER_ROLE:
      return {
        ...state,
        permissions:action.payload.data,
        user_role:action.payload.role_id
      }
    case GET_LOGGED_IN_USER_DETAILS:
      return{
        ...state,
        loggedInUser:action.payload
      }
    case GET_AUTH_ERROR:
      return{
        ...state,
        errors:action.payload
      }
    default:
      return state;
  }
}