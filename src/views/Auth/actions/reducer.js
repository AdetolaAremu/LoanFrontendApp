import isEmpty from "utils/isEmpty";
import { AUTH_LOADING_ENDS, AUTH_LOADING_STARTS, SET_CURRENT_USER, ROLE_LOADING_STARTS, ROLE_LOADING_ENDS, CHECK_USER_ROLE } from "./types";

const init = {
  isAuthenticated:false,
  user: {},
  // isAdmin: false,
  user_role:"",
  loading:false,
  authLoading:false
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
        user_role:action.payload.role_id
      }
    default:
      return state;
  }
}