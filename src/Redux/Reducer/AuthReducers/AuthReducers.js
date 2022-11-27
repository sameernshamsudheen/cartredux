const initalState = {
  LoginData: {},
};

export const AuthReducers = (state = initalState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload, "payload login");
      return { ...state, LoginData: action.payload };
    case "LOGOUT":
      return { ...state, LoginData: null };

    default:
      return state;
  }
};
