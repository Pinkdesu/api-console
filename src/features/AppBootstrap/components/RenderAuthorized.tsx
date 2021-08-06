import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DefaultView from "../../DefaultView";
import Console from "../../Console";

const RenderAuthorized: React.VFC = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/console" component={Console} exact />
        <Redirect from="*" to="/console" />
      </Switch>
    </DefaultView>
  );
};

export default RenderAuthorized;
