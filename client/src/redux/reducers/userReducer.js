import * as actions from "../actions/actionTypes";

const initState = {
  isLoading: false,
  error: false,
  userName: "",
  email: "",
};

export const user = (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.user,
        isLoading: false,
        error: false,
      };
    case actions.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actions.LOGOUT: {
      return initState;
    }
    default:
      return state;
  }
};
