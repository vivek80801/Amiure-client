import { SIGN_UP, LOG_IN, LOG_OUT } from "./types";

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
        msg: string;
        username: string;
        email: string;
      };
    }
  | {
      type: typeof LOG_OUT;
    };

export const authReducer = (
  state: { username: string; email: string; msg: string } = {
    username: "",
    email: "",
    msg: "",
  },
  action: IAuthAction
) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        username: "",
        email: "",
        msg:
          action.payload.msg === "ok"
            ? "Now, you can log in"
            : action.payload.msg,
      };

    case "LOG_IN":
      return {
        username: action.payload.username,
        email: action.payload.email,
        msg: action.payload.msg,
      };

    case "LOG_OUT":
      return { username: "", email: "", msg: "" };

    default:
      return state;
  }
};
