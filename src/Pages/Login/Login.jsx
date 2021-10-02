import React, { useContext } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from './Login.module.scss'
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }
  return (
    <div className={classes.Login}>
      <h1>Login</h1>
      <form onSubmit={login}>
        <Input style={{marginTop: '20px'}} type="text" placeholder="Login" />
        <Input style={{marginTop: '20px'}} type="password" placeholder="Password" />
        <Button style={{marginTop: '20px'}}>Login</Button>
      </form>
    </div>
  );
};

export default Login;
