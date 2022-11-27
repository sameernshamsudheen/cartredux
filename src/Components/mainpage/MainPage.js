import React from "react";
import "./MainPage.css";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const Navigate = useNavigate();

  return (
    <div className="MainPage">
      <h1 className="title"> Welcome to Sameers Cart</h1>
      <div className="box">
        <Button
          onClick={() => Navigate("/home")}
          style={{ margin: "0 1rem" }}
          type="primary"
        >
          All Products
        </Button>
        <Button
          onClick={() => Navigate("/cart")}
          style={{ margin: "0 1rem" }}
          type="primary"
        >
          Go to Cart
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
