import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/signup";

const Home: React.FC = (): JSX.Element => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState<any>("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state => " + JSON.stringify(state));
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return dispatch(signup(username, email, password));
        }}
      >
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
