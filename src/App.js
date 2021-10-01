import React from "react";
import AddPost from "./components/AddPost/AddPost";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
};

export default App;
