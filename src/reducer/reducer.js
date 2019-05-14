function reducer(state, action) {
  const payload = action.payload;
  switch (action.type) {
    case "BUTTON_VALUE":
      console.log(action.type);
      return { ...state, inputValue: payload };
    default:
      return state;
  }
}

export default reducer;
