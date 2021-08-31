import React from "react";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/login">log in</a>
        </li>
        <li>
          <a href="/dashboard">dashboard</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
