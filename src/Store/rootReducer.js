import { combineReducers } from "redux";
import landingReducer from "views/Landing/actions/reducer"
// import dashboardReducer from "views/"

export default combineReducers({
  landing:landingReducer,
  // dashboard:dashboardReducer
});