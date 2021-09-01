import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { fetchUser } from "../../actions/getUser";

const Dashboard: React.FC = (): JSX.Element => {
  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser(state[0].id));
  }, []);

  return (
    <>
      <h1>Hello {state[0].username}</h1>
    </>
  );
};

export default Dashboard;
