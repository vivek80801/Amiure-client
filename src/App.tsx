import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import "./App.scss";
import Home from "./components/pages/Home";
import Default from "./components/pages/Default";
import LogIn from "./components/pages/LogIn";
import Dashboard from "./components/pages/Dashboard";
import CreateBlog from "./components/pages/CreateBlog";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/login"} component={LogIn} />
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/createblog"} component={CreateBlog} />
        <Route component={Default} />
      </Switch>
    </>
  );
};

export default App;
