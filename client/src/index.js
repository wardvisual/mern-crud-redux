import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { retrieveBook } from "./redux/book/bookActions";

store.dispatch(retrieveBook());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
