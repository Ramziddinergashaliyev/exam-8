import React from "react";
import "./login.scss";
import img from "../../assets/images/Login.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login__img">
        <img src={img} alt="Background" />
      </div>

      <div className="login__form">
        <form className="login__form-card">
          <h2 className="login__title">Login</h2>
          <p className="login__signup-text">
            Don't have an account yet? <NavLink>Sign Up</NavLink>
          </p>
          <div className="login__input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="login__input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="login__checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="login__button">
            Login
          </button>
          <div className="login__social-buttons">
            <button type="button" className="login__social-button google">
              Google
            </button>
            <button type="button" className="login__social-button facebook">
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
