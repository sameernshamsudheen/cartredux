import React, { useEffect } from "react";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { SingleProductDetails } from "../../Redux/Actions/ProductActions/ProductActions";
import { Button, Space } from "antd";
import "./SingleProduct.css";

const SingleProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const singleItems = useSelector((state) => state.products.singleItems);
  console.log(singleItems, "sameer");
  return (
    <div className="SingleProduct">
      <Card
        title={singleItems?.title}
        bordered={true}
        style={{
          width: 500,
        }}
      >
        <img style={{ width: "300px" }} src={singleItems?.image} />
        <p>{singleItems?.description}</p>
        <div className="footer">
          <p className="price">{singleItems.price}</p>
          <Button type="primary">BuyNow</Button>
        </div>
      </Card>
    </div>
  );
};

export default SingleProduct;
