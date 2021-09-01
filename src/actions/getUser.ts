import { Dispatch } from "redux";
import { GET_USER } from "../reducers/types";
import { IAuthAction } from "../reducers/authReducer";

const getUser = (username: string, email: string): IAuthAction => {
  return {
    type: GET_USER,
    payload: {
      username: username,
      email: email,
    },
  };
};

export const fetchUser = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch("http://localhost:5000/getUser/" + id);
      const data: { username: string; email: string } = await res.json();
      return dispatch(getUser(data.username, data.email));
    } catch (err) {
      console.log(err);
    }
  };
};
