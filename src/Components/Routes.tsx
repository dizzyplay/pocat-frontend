import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import { useMutation, useQuery } from "react-apollo-hooks";
import { CHECK_LOGIN, LOCAL_USER_LOGOUT } from "../Apollo/Queries";
import Loading from "./Loading";
import { MyTest } from "./MyTest";
import AddWeight from "../Routes/AddWeight";

interface RouterProps {
  isLoggedIn: boolean;
}

const LoginRoutes = () => {
  const { data, error, loading } = useQuery(CHECK_LOGIN);
  const logoutMutation = useMutation(LOCAL_USER_LOGOUT);
  if (loading) return <Loading />;
  else if (!data.getUser && error) {
    setTimeout(async () => {
      await logoutMutation();
    }, 1000);
    return <Loading />;
  } else
    return (
      <>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/test"} component={MyTest} />
          <Route exact path={"/weight/:id"} component={AddWeight} />
        </Switch>
      </>
    );
};

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
