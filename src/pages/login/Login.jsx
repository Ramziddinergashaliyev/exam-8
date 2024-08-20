import React, { useState, useEffect } from "react";
import "./login.scss";
import img from "../../assets/images/Login.jpg";
import { NavLink } from "react-router-dom";
import { useSignInMutation } from "../../context/api/userApi";
import { setToken } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert } from "antd";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(initialState);
  const [login, { data, isSuccess }] = useSignInMutation();

  const handleChange = (e) => {
    let { value, name } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.payload.token));
      navigate("/admin/createProduct");
      <Alert message="Success Tips" type="success" showIcon />;
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(value);
  };

  return (
    <div className="login">
      <div className="login__img">
        <img src={img} alt="Background" />
      </div>
      <div className="login__form">
        <form onSubmit={handleSubmit} className="login__form-card">
          <h2 className="login__title">Login</h2>
          <p className="login__signup-text">
            Don't have an account yet?{" "}
            <NavLink to={"/register"}>Sign Up</NavLink>
          </p>
          <div className="login__input-group">
            <label htmlFor="username">Username</label>
            <input
              value={value.username}
              onChange={handleChange}
              name="username"
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="login__input-group">
            <label htmlFor="password">Password</label>
            <input
              value={value.password}
              name="password"
              onChange={handleChange}
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
