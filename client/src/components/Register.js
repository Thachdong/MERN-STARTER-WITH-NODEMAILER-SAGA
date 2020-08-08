import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Register = ({
  userName,
  email,
  password,
  repeatPassword,
  error,
  handleChange,
  register,
  apiCall,
}) => (
  <div className="login flex-box">
    <form onSubmit={register} className="flex-box">
      <h3>
        User Register
        {apiCall.apiName === "register" && apiCall.success && (
          <p className="success">{apiCall.message}</p>
        )}
        {apiCall.apiName === "register" && apiCall.success === false && (
          <p className="error">{apiCall.message}</p>
        )}
      </h3>
      <div className="form-control flex-box">
        <label htmlFor="userName">
          UserName:
          {error.path === "userName" && (
            <span className="error">({error.message})</span>
          )}
        </label>
        <input
          id="userName"
          type="text"
          placeholder="Enter your name"
          required
          value={userName}
          onChange={(e) => handleChange(e, "userName")}
        />
      </div>
      <div className="form-control flex-box">
        <label htmlFor="email">
          Email:
          {error.path === "email" && (
            <span className="error">({error.message})</span>
          )}
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
      <div className="form-control flex-box">
        <label htmlFor="password">
          Password:
          {error.path === "password" && (
            <span className="error">({error.message})</span>
          )}
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => handleChange(e, "password")}
        />
      </div>
      <div className="form-control flex-box">
        <label htmlFor="repeatPassword">
          Repeat password:
          {error.path === "repeatPassword" && (
            <span className="error">({error.message})</span>
          )}
        </label>
        <input
          id="repeatPassword"
          type="password"
          placeholder="Repeat your password"
          required
          value={repeatPassword}
          onChange={(e) => handleChange(e, "repeatPassword")}
        />
      </div>
      <div className="form-control">
        <button type="submit">Register</button>
      </div>
      <p>
        You have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  </div>
);

Register.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  apiCall: PropTypes.object,
};

export default Register;
