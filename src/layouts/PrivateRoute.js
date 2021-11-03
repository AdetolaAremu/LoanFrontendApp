import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, allAuths, ...rest }) => (
  <>
  <Route
    {...rest}
    render={(props) =>
      allAuths.isAuthenticated === true ? (
        <Component {...props} dataFromPrivate={props} />
      ) : (
        <Redirect to="/auth/login" />
      )
    }
  />
  </>
);

PrivateRoute.propTypes = {
  allAuths: PropTypes.object.isRequired,
};

const mapStateToProps = ({ allAuths }) => ({
  allAuths,
});

export default connect(mapStateToProps)(PrivateRoute);
