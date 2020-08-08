import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouteGuard from "./routeGuard";
import LoginContainer from "./containers/LoginContainer";
import Dashboard from "./components/Dashboard";
import RegisterContainer from "./containers/RegisterContainer";
import ActiveUser from "./components/ActiveUser";
import ResetPasswordRequest from "./components/ResetPasswordRequest";
import ResetPassword from "./components/ResetPassword";
import NotFound from "./components/NotFound";

const App = ({ isLoading, email }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={RouteGuard(Dashboard, email)} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/user/activate/:userId/:token" component={ActiveUser} />
        <Route
          path="/user/reset-password-request"
          component={ResetPasswordRequest}
        />
        <Route path="/user/reset-password" component={ResetPassword} />
        <Route component={NotFound} />
      </Switch>
      {isLoading && (
        <div className="preloader flex-box">
          <div></div>
        </div>
      )}
    </Router>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    isLoading: user.isLoading,
    email: user.email,
  };
};

export default connect(mapStateToProps, null)(App);
