import React from "react";
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const data = useSelector((state) => state.Auth.LoginData);
  console.log(data, "sameer");
  if (data?.username === "sameer@gmail.com" && data?.password === "sameer") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
