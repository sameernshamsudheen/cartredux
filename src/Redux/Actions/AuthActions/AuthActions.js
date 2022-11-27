export const LoginActions = (data) => async (dispatch) => {
  console.log(data, "login data in actions");
  dispatch({ type: "LOGIN", payload: data });
};

export const LogOutActions = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
