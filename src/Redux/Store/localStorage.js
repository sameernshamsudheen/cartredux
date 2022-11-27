export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log(err);
  }
};

export const loadState = () => {
  try {
    const appState = localStorage.getItem("appState");
    if (appState) {
      const serialState = JSON.parse(appState);
      return serialState;
    } else {
      return {};
    }
  } catch (err) {
    console.log(err);
  }
};
