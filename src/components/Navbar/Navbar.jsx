import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <NavLink to="/">Logo</NavLink>
      </div>
      <ul className={classes.navbar__list}>
        <li className={classes.navbar__item}>
          <NavLink
            className={classes.navbar__link}
            activeClassName={classes.active}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={classes.navbar__item}>
          <NavLink
            className={classes.navbar__link}
            activeClassName={classes.active}
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
