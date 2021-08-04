import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DefaultView from "../../DefaultView";
import Login from "../../Login";

const Sign: React.VFC = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Login} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
