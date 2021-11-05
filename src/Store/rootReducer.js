import { combineReducers } from "redux";
import landingReducer from "views/Landing/actions/reducer";
import authReducer from "views/Auth/actions/reducer";
import loanReducer from "views/LoanApplication/actions/reducer"
import loanTypeReducer from "views/LoanType/actions/reducer"
import kycReducer from "views/KYC/actions/reducer"
import dashboardReducer from "layouts/actions/reducer"
// import dashboardReducer from "views/"

export default combineReducers({
  landing:landingReducer,
  allAuths:authReducer,
  loans:loanReducer,
  loanType:loanTypeReducer,
  kyc:kycReducer,
  dashboard: dashboardReducer
  // dashboard:dashboardReducer
});