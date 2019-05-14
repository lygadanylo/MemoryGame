export default (state = {}, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "BUTTON_VALUE":
      console.log("reducer:", action);
      return { ...state, inputValue: payload };
    default:
      return state;
  }
};
