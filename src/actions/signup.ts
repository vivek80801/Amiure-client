import { Dispatch } from "redux";
import { SIGN_UP } from "../reducers/types";
import { IAuthAction } from "../reducers/authReducer";

export const signupUser = (msg: string): IAuthAction => {
  return {
    type: SIGN_UP,
    payload: { msg: msg },
  };
};

export const signup = (username: string, email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      if (process.env.NODE_ENV === "production") {
      } else {
        const res = await fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        });
        const data: { msg: string } = await res.json();
        return dispatch(signupUser(JSON.parse(data.msg)));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
