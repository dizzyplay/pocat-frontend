import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import { useMutation, useQuery } from "react-apollo-hooks";
import { CHECK_LOGIN, LOCAL_USER_LOGOUT } from "../Apollo/Queries";
import Loading from "./Loading";
import { CustomError } from "./CustomError";

interface RouterProps {
  isLoggedIn: boolean;
}

const LoginRoutes = () => {
  const { error, loading } = useQuery(CHECK_LOGIN);
  const logoutMutation = useMutation(LOCAL_USER_LOGOUT);
  if (loading) return <Loading />;
  else if (error) {
    setTimeout(async () => {
      await logoutMutation();
    }, 2000);
    return <CustomError />;
  } else
    return (
      <>
        <Switch>
          <Route exact path={"/"} component={Home} />
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
