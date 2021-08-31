import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { login } from "../../actions/login";

const LogIn: React.FC = (): JSX.Element => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state);

  return (
    <>
      {state[0].msg === "dashboard" && <Redirect to="/dashboard" />}
      <form
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
