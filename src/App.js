import React from "react";
import AddPost from "./components/AddPost/AddPost";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/posts" component={AddPost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
