import { SIGN_UP, LOG_IN, LOG_OUT, GET_USER } from "./types";

export type IAuthAction =
  | {
      type: typeof SIGN_UP;
      payload: {
        msg: string;
      };
    }
  | {
      type: typeof LOG_IN;
      payload: {
        id: string;
        msg: string;
      };
    }
  | {
      type: typeof LOG_OUT;
    }
  | {
      type: typeof GET_USER;
      payload: {
        email: string;
        username: string;
      };
    };

export const authReducer = (
  state: { id: string; username: string; email: string; msg: string } = {
    id: "",
    username: "",
    email: "",
    msg: "",
  },
  action: IAuthAction
) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        id: "",
        username: "",
        email: "",
        msg: action.payload.msg,
      };

    case "LOG_IN":
      return {
        id: action.payload.id,
        username: "",
        email: "",
        msg: action.payload.msg,
      };

    case "LOG_OUT":
      return { id: "", username: "", email: "", msg: "" };

    case "GET_USER":
      return {
        id: state.id,
        username: action.payload.username,
        email: action.payload.email,
        msg: state.msg,
      };

    default:
      return state;
  }
};
