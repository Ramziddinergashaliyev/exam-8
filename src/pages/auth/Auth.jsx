import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  let user = useSelector((state) => state.auth.token);
  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default Auth;
