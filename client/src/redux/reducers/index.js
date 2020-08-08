import { combineReducers } from "redux";
import { user } from "./userReducer";
import { apiCall } from "./apiCallReducer";

export const rootReducer = combineReducers({
  user,
  apiCall,
});
