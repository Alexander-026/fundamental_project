import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../UI/Button/Button";
import classes from "./Navbar.module.scss";
const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
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
        {isAuth &&  <li className={classes.navbar__item}>
          <Button onClick={() => logout()}>Logout</Button>
        </li>}
      </ul>
    </div>
  );
};

export default Navbar;
