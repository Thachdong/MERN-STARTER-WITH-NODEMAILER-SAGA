import React from "react";
import { Redirect } from "react-router-dom";

const RouteGuard = (GuardComponent, email) => ({ match }) => {
  if (email === "") {
    return <Redirect to="login" />;
  }
  return <GuardComponent match={match} />;
};

export default RouteGuard;
