import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { login } from "../../actions/login";
import loginStyle from "../../scss/components/pages/login.module.scss";

const LogIn: React.FC = (): JSX.Element => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state);

  return (
    <>
      {state.auth.msg === "dashboard" && <Redirect to="/dashboard" />}
      <form
        className={loginStyle.desktop}
        onSubmit={(e) => {
          e.preventDefault();
          return dispatch(login(username, password));
        }}
      >
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <input type="submit" value="login" />
      </form>
    </>
  );
};

export default LogIn;
