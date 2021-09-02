import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import navbar from "../../scss/components/layouts/navbar.module.scss";
import { IState } from "../../store";

const Navbar: React.FC = (): JSX.Element => {
  const state = useSelector((state: IState) => state);
  return (
    <>
      <nav className={navbar.desktop}>
        <h1>logo</h1>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/login">log in</Link>
          </li>
          {state.auth.msg === "dashboard" && (
            <>
              <li>
                <Link to="/dashboard">dashboard</Link>
              </li>
              <li>
                <Link to="/createblog">create blog</Link>
              </li>
              <li>
                <Link to="/blogs">blogs</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
