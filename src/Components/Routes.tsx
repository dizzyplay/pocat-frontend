import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";

interface RouterProps {
  isLoggedIn: boolean;
}

const LoginRoutes = () => (
  <>
    <Switch>
      <Route exact path={"/"} component={Home} />
    </Switch>
  </>
);

const NeedLoginRoute = () => (
  <>
    <Switch>
      <Route exact path={"/"} component={Auth} />
    </Switch>
  </>
);

const Router = (props: RouterProps) => (
  <Switch>{props.isLoggedIn ? <LoginRoutes /> : <NeedLoginRoute />}</Switch>
);

export default Router;
