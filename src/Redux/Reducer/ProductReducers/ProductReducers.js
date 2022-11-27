const initialState = {
  items: [],
  cart: [],
  singleItems: {},
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { ...state, items: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      const items = state.cart.filter((x) => x.id !== Number(action.payload));
      return {
        ...state,
        cart: [...items],
      };

    case "SINGLE_PRODUCT_DETAILS":
      const value = state.items.find((x) => x.id === Number(action.payload));
      console.log(value, "reducer value");

      return {
        ...state,
        singleItems: { ...value },
      };

    case "SORT_PRICE_LOW_TO_HIGH":
      let sortedProductsLow = state.items.sort((p1, p2) =>
        p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
      );
      return {
        ...state,
        items: [...sortedProductsLow],
      };
    case "SORT_PRICE_HIGH_TO_LOW":
      let sortedProductsHigh = state.items.sort((p1, p2) =>
        p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
      );
      return {
        ...state,
        items: [...sortedProductsHigh],
      };

    default:
      return state;
  }
};
