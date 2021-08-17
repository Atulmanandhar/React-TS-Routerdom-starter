import React, { FC, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import logging from "./config/logging";
import routes from "./config/route";

const Application: FC<{}> = (props) => {
  useEffect(() => {
    logging.info("Loading Application");
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.commponent
                    {...props}
                    {...route.props}
                    name={route.name}
                  />
                )}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Application;
