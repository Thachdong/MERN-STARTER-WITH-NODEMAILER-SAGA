import * as actions from "../actions/actionTypes";

const initState = {
  apiName: "",
  message: "",
  success: true,
};

export const apiCall = (state = initState, action) => {
  if (action.type === actions.API_CALL) {
    return {
      apiName: action.apiName,
      success: action.success,
      message: action.message,
    };
  } else {
    return state;
  }
};
