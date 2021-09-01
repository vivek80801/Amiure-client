import { Dispatch } from "redux";
import { LOG_IN } from "../reducers/types";
import { IAuthAction } from "../reducers/authReducer";

export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      if (process.env.NODE_ENV === "production") {
      } else {
        const res = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ username: username, password: password }),
        });
        const data: { msg: string } = await res.json();
        return dispatch(loginUser(data.msg, res.url.split("=")[1]));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginUser = (msg: string, id: string): IAuthAction => {
  return {
    type: LOG_IN,
    payload: { msg: msg, id: id },
  };
};
