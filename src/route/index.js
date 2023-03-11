import React from "react";
import { ROUTES_MENU } from "constants/routesMenu";
import { Route, Switch } from "react-router";

const routes = (
  <div>
    <Switch>
      {ROUTES_MENU.map((route, index) => {
        const { path, component, exact } = route;
        return (
          <Route key={index} path={path} component={component} exact={exact} />
        );
      })}
    </Switch>
  </div>
);

export default routes;
