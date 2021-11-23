import { combineReducers } from "redux";
import landingReducer from "views/Landing/actions/reducer";
import authReducer from "views/Auth/actions/reducer";
import loanReducer from "views/LoanApplication/actions/reducer";
import loanTypeReducer from "views/LoanType/actions/reducer";
import kycReducer from "views/KYC/actions/reducer";
import dashboardReducer from "layouts/actions/reducer";
import applicationReducer from "views/Applications/actions/reducer";
import notifiationReducer from "utils/actions/reducer";
import adminReducer from "layouts/actions/reducer";
import profileReducer from "views/Profile/actions/reducer"
import statsReducer from "views/DashbordActions/reducer";
// import dashboardReducer from "views/"

export default combineReducers({
  mainStats:statsReducer,
  landing:landingReducer,
  allAuths:authReducer,
  loans:loanReducer,
  loanType:loanTypeReducer,
  kyc:kycReducer,
  dashboard: dashboardReducer,
  applications:applicationReducer,
  notifier:notifiationReducer,
  admin: adminReducer,
  profiler: profileReducer
});