import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";

const Dashboard: React.FC = (): JSX.Element => {
  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  return (
    <>
      {state.auth.username !== "" && (
        <>
          <h1>Hello {state.auth.username}</h1>
          <h2>Hello from dashboard</h2>
        </>
      )}
    </>
  );
};

export default Dashboard;
