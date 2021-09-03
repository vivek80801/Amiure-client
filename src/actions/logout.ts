import { Dispatch } from "redux";
import { LOG_OUT } from "../reducers/types";
import { IAuthAction } from "../reducers/authReducer";

export const logoutState = (): IAuthAction => {
  return {
    type: LOG_OUT,
  };
};

export const logout = () => {
  return async (dispatch: Dispatch) => {
    try {
      await fetch("/api/logout");
      return dispatch(logoutState());
    } catch (err) {
      console.log(err);
    }
  };
};
