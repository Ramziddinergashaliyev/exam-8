import React, { useState } from "react";
import "./register.scss";
import { useRegisterUserMutation } from "../../context/api/userApi";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [register] = useRegisterUserMutation();
  const [formData, setFormData] = useState({
    fname: "",
    phone: "",
    username: "",
    password: "",
    lname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <p className="login__signup-text">
        Don't have an account yet? <NavLink to={"/login"}>Sign In</NavLink>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">First name</label>
          <input
            id="fname"
            name="fname"
            type="text"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Enter fname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="units">username</label>
          <input
            id="username"
            name="username"
            type="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="text"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last name</label>
          <input
            id="lname"
            name="lname"
            type="text"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Enter lname"
          />
        </div>
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
