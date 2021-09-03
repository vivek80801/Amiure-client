import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { signup } from "../../actions/signup";
import home from "../../scss/components/pages/home.module.scss";

const Home: React.FC = (): JSX.Element => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{state.auth.msg}</h1>
      <form
        className={home.desktop}
        onSubmit={(e) => {
          e.preventDefault();
          return dispatch(signup(username, email, password));
        }}
      >
        <h2>sign up</h2>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <input type="submit" value="sign up" />
      </form>
    </>
  );
};

export default Home;
