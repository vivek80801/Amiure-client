import React from "react";
import { Link } from "react-router-dom";
import navbar from "../../scss/components/layouts/navbar.module.scss";

const Navbar: React.FC = (): JSX.Element => {
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
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/createblog">create blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
