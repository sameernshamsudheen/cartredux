import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Space, Table, Tag } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { RemoveFromCart } from "../../Redux/Actions/ProductActions/ProductActions";
import { AddToCart } from "../../Redux/Actions/ProductActions/ProductActions";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.products?.cart);
  const Navigate = useNavigate();

  const dataSource = product?.map((i, key) => {
    return {
      key: key,
      id: `${i?.id}`,
      title: `${i?.title}`,
      price: `${i?.price}`,
      rating: `${i?.rating.rate}`,
      count: `${i?.rating.count}`,
    };
  });

  const columns = [
    { key: "1", title: "Title", dataIndex: "title" },
    { key: "2", title: "Price", dataIndex: "price" },
    { key: "3", title: "Rating", dataIndex: "rating" },
    { key: "4", title: "Count", dataIndex: "count" },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <div>
            <EditOutlined />
            <DeleteOutlined
              onClick={() => {
                dispatch(RemoveFromCart(record.id));
              }}
              style={{ margin: " 0 0.5rem" }}
            />
          </div>
        );
      },
    },
  ];
  if (dataSource.length === 0) {
    console.log("mycondtions");
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          {" "}
          the cart is empty please add some thing
        </h1>
        <button onClick={() => Navigate("/home")}>go to product page</button>
      </div>
    );
  } else {
    console.log("else");
    console.log(dataSource);
    return (
      <div className="Cart">
        <Table
          pagination={false}
          columns={columns}
          dataSource={[...dataSource]}
        />
      </div>
    );
  }
};

export default Cart;
