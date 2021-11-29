import React from "react";
import PrivateRoute from "layouts/PrivateRoute";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Provider, connect} from 'react-redux'
import store from "Store"
import setAuthToken from "utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "views/Auth/actions/actions";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Landing from "views/Landing/Landing"
import Login from "views/Auth/Login"
import KYCPending from "views/Applications/KYCPending";
import { logoutUser } from "views/Auth/actions/actions";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    // window.location.href = CONSTANTS.LOGIN;
  }
}

ReactDOM.render(  
  <Provider store ={store}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin" component ={AdminLayout} />
        <Route path="/auth" component ={AuthLayout} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
