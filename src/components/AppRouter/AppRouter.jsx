import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddPost from "../AddPost/AddPost";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import PostIdPage from "../../Pages/PostIdPage/PostIdPage";
import { routes } from "../../Router/Routs";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((rout) => (
        <Route path={rout.path} component={rout.component} exact={rout.exact} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
