import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import MainPage from "./Components/mainpage/MainPage";
import Login from "./Components/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SingleProduct from "./Components/SingleProduct/SingleProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
