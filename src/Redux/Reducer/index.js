import { combineReducers } from "redux";
import { productReducers } from "../Reducer/ProductReducers/ProductReducers";
import { AuthReducers } from "./AuthReducers/AuthReducers";

export const rootReducer = combineReducers({
  products: productReducers,
  Auth: AuthReducers,
});
