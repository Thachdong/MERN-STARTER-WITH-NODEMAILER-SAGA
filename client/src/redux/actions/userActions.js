import * as actions from "./actionTypes";

//1. LOGIN REQUEST
export const loginRequest = (email, password) => ({
  type: actions.LOGIN_REQUEST,
  email,
  password,
});
//2. LOGIN SUCCESS
export const loginSuccess = (user) => ({
  type: actions.LOGIN_SUCCESS,
  user,
});
//3. LOGIN FAIL
export const loginFail = (error) => ({
  type: actions.LOGIN_FAIL,
  error,
});
//4. LOGOUT
export const logout = () => ({
  type: actions.LOGOUT,
});
//5. ACTIVATE USER ACCOUNT
export const activateUser = () => ({
  type: actions.ACTIVATE,
});
//6.REGISTER AN USER'S ACCOUNT
export const register = (userInfo) => ({
  type: actions.REGISTER_REQUEST,
  userInfo,
});
//7. MAKE AN API CALL
export const apiCall = (apiName, success, message) => ({
  type: actions.API_CALL,
  apiName,
  success,
  message,
});
