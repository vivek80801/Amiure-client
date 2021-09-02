import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { blogReducer } from "./blogReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});
