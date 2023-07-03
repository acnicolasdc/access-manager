import { IRouteType } from "@core/types/router";
import authRoute from "./auth";
import userRoute from "./user";
import { Route, Switch } from "react-router-dom";

const Router = () => {
  const pageRoutes = [authRoute, userRoute].map(
    ({ path, title, element }: IRouteType) => {
      return <Route key={title} path={`/${path}`} component={element} />;
    }
  );

  return <Switch>{pageRoutes}</Switch>;
};

export default Router;
