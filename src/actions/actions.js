export const buttonsFunc = e => dispatch => {
  console.log("dispatch");
  dispatch(actionTest(e));
};

const actionTest = value => ({
  type: "BUTTON_VALUE",
  payload: value
});
