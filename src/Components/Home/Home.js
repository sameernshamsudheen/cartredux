import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import {
  GetAllProducts,
  SingleProductDetails,
} from "../../Redux/Actions/ProductActions/ProductActions";
import { Button, Space } from "antd";
import { Card } from "antd";
import { AddToCart } from "../../Redux/Actions/ProductActions/ProductActions";
import { useNavigate } from "react-router-dom";
import { sortHighToLow } from "../../Redux/Actions/ProductActions/ProductActions";
import { sortLowToHigh } from "../../Redux/Actions/ProductActions/ProductActions";
import { LogOutActions } from "../../Redux/Actions/AuthActions/AuthActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProducts());
  }, [dispatch]);
  const allProducts = useSelector((state) => state.products.items);
  console.log(allProducts);

  const { Meta } = Card;
  const Navigate = useNavigate();
  const handleCart = (item) => {
    dispatch(AddToCart(item));

    Navigate("/cart");
  };

  const handleMore = (id) => {
    dispatch(SingleProductDetails(id));

    Navigate("/singleproduct");
  };

  const handleLogout = () => {
    dispatch(LogOutActions());

    Navigate("/");
  };

  return (
    <div className="main">
      <div className="filters">
        <Button
          onClick={handleLogout}
          style={{ margin: "1rem " }}
          type="primary"
        >
          Logout
        </Button>
        <p className="title">filters</p>
        <Button
          onClick={() => dispatch(sortLowToHigh())}
          style={{ margin: "1rem " }}
          type="primary"
        >
          price low to high
        </Button>
        <Button
          onClick={() => dispatch(sortHighToLow())}
          style={{ margin: "1rem " }}
          type="primary"
        >
          price high to low
        </Button>
      </div>

      <div className="box">
        {allProducts.map((item, index) => {
          return (
            <Card
              key={index}
              className="card"
              hoverable
              cover={<img alt="example" src={`${item?.image}`} />}
            >
              <Meta title={`${item?.title}`} />
              <h3>{`${item.price}Rs`}</h3>
              <Button
                onClick={() => handleCart(item)}
                style={{ margin: "1rem 0.2rem" }}
                type="primary"
              >
                add to cart
              </Button>
              <Button
                onClick={() => handleMore(item.id)}
                style={{ margin: "1rem 0.2rem" }}
                type="primary"
              >
                More
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
