import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/reducer";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { composeWithDevTools } from "redux-devtools-extension";

// const initialState = {
//     inputValue: "10"
// };

const store = createStore(reducer, composeWithDevTools());

// store.subscribe(()=> console.log('New state', store.getState()));

// const value = {
//     inputValue: 5
// }

// store.dispatch({
//     type: 'BUTTON_VALUE',
//     payload: value
// });
// store.dispatch({
//     type: 'BUTTON_VALUE',
//     value
// });
// store.dispatch({
//     type: 'BUTTON_VALUE',
//     value
// });
// store.dispatch({
//     type: 'BUTTON_VALUE',
//     value
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
