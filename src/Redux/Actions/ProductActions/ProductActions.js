import axios from "axios";

export const GetAllProducts = () => async (dispatch) => {
  const response = await axios.get("http://fakestoreapi.com/products");

  dispatch({ type: "GET_ALL_PRODUCTS", payload: response?.data });
};

export const SingleProductDetails = (id) => async (dispatch) => {
  dispatch({ type: "SINGLE_PRODUCT_DETAILS", payload: id });
};
export const AddToCart = (data) => async (dispatch) => {
  dispatch({ type: "ADD_TO_CART", payload: data });
};

export const RemoveFromCart = (id) => async (dispatch) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: id });
};

export const sortHighToLow = () => async (dispatch) => {
  dispatch({ type: "SORT_PRICE_HIGH_TO_LOW" });
};

export const sortLowToHigh = () => async (dispatch) => {
  console.log("action fired");
  dispatch({ type: "SORT_PRICE_LOW_TO_HIGH" });
};
