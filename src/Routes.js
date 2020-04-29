import React, { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout";
import Main from "./layouts/Main";

const MainPage = React.lazy(() => import("./views/MainPage"));
const Houses = React.lazy(() => import("./views/Houses"));
const House = React.lazy(() => import("./views/House"));
const AddHouse = React.lazy(() => import("./views/AddHouse"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Lazy loading...</div>}>
      <Switch>
        <Redirect exact from="/" to="/main" />
        <RouteWithLayout component={MainPage} exact layout={Main} path="/main" />
        <RouteWithLayout component={Houses} exact layout={Main} path="/houses" />
        <RouteWithLayout component={AddHouse} exact layout={Main} path="/houses/add" />
        <RouteWithLayout component={House} exact layout={Main} path="/houses/:id" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
