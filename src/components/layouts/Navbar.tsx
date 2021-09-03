import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import navbar from "../../scss/components/layouts/navbar.module.scss";
import { IState } from "../../store";
import { logout } from "../../actions/logout";

const Navbar: React.FC = (): JSX.Element => {
  const [showNav, setShowNav] = React.useState(false);

  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();
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
              <li>
                <span onClick={() => dispatch(logout())}>logout</span>
              </li>
            </>
          )}
        </ul>
      </nav>
      <nav className={navbar.mobile}>
        <h1>logo</h1>
        <div className={navbar.lines} onClick={() => setShowNav(!showNav)}>
          <div className={navbar.line}></div>
          <div className={navbar.line}></div>
          <div className={navbar.line}></div>
        </div>
        <ul style={showNav ? { display: "flex" } : { display: "none" }}>
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
              <li>
                <span onClick={() => dispatch(logout())}>logout</span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
