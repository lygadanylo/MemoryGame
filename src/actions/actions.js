export const buttonsFunc = e => dispatch => {
  console.log("dispatch");
  dispatch(actionTest(e));
};

export const actionTest = value => ({
  type: "BUTTON_VALUE",
  payload: value
});
