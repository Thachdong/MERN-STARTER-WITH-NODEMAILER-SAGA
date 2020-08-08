import React, { useState } from "react";
import { connect } from "react-redux";
import Register from "../components/Register";
import { registerSchema } from "../validators";
import { register } from "../redux/actions/userActions";

const RegisterContainer = ({ apiCall, register }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e, info) => {
    switch (info) {
      case "userName":
        setUserName(e.target.value);
        return true;
      case "email":
        setEmail(e.target.value);
        return true;
      case "password":
        setPassword(e.target.value);
        return true;
      case "repeatPassword":
        setRepeatPassword(e.target.value);
        return true;
      default:
        return true;
    }
  };

  const errorHandler = (errPath) => {
    switch (errPath) {
      case "userName": {
        setError({
          path: errPath,
          message: "* Name must be alphanum, 3 - 30 charaters",
        });
        return true;
      }
      case "email": {
        setError({ path: errPath, message: "* Invalid email" });
        return true;
      }
      case "password": {
        setError({
          path: errPath,
          message:
            "* Password must be 6 - 30 characters, not contain special characters",
        });
        return true;
      }
      case "repeatPassword": {
        setError({
          path: errPath,
          message: "* RepeatPassword must be match to passwords",
        });
        return true;
      }
      default:
        return true;
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const userInfo = {
      userName,
      email,
      password,
      repeatPassword,
    };
    const isValidUserInfo = registerSchema.validate(userInfo);
    if (isValidUserInfo.error) {
      let errPath = isValidUserInfo.error.details[0].path[0];
      errorHandler(errPath);
      return true;
    }
    setError(false);
    register(userInfo);
  };

  return (
    <Register
      userName={userName}
      email={email}
      password={password}
      repeatPassword={repeatPassword}
      error={error}
      handleChange={handleChange}
      register={registerUser}
      apiCall={apiCall}
    />
  );
};
const mapStateToProps = ({ apiCall }) => ({ apiCall });
const mapDispatchToProps = {
  register,
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
