import { combineReducers } from "redux";
import landingReducer from "views/Landing/actions/reducer";
import authReducer from "views/Auth/actions/reducer";
// import dashboardReducer from "views/"

export default combineReducers({
  landing:landingReducer,
  allAuths:authReducer
  // dashboard:dashboardReducer
});