import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publickRoutes, privateRoutes } from "../../Router/Routs";
import { AuthContext } from "../../context/AuthContext";
import Loader from '../../UI/Loader/Loader'

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading) {
    return <Loader/>
  }
  

  return isAuth ? (
    <Switch>
      {privateRoutes.map((rout) => (
        <Route key={rout.path} path={rout.path} component={rout.component} exact={rout.exact} />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publickRoutes.map((rout) => (
        <Route key={rout.path} path={rout.path} component={rout.component} exact={rout.exact} />
      ))}
       <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
