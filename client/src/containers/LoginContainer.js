import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Login from "../components/Login";
import { loginSchema } from "../validators";
import { loginRequest } from "../redux/actions/userActions";

const LoginContainer = ({ user, loginRequest }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    user.email && history.push("/");
  });

  /*
   *Handle internal error detected by Joi schema
   */
  const errorHandler = (errPath) => {
    errPath === "email" &&
      setError({ path: errPath, message: "Invalid email" });
    errPath === "password" &&
      setError({
        path: errPath,
        message:
          "Password must be 6 - 30 length, not contain special characters",
      });
  };

  /*
   *DISPATCH LOGIN REQUEST ACTION + LOGIN CREDENTIALS TO SAGA
   *1. Validate User credential using Joi schema
   *2. Dispatch loginRequest action
   */

  const login = (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };
    const validUser = loginSchema.validate(userInfo);
    if (validUser.error) {
      const errPath = validUser.error.details[0].path[0];
      errorHandler(errPath);
      return true;
    }
    setError(false);
    loginRequest(userInfo.email, userInfo.password);
  };

  return (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      error={error}
      setPassword={setPassword}
      login={login}
      user={user}
    />
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  loginRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
