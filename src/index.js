import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createAppStore } from "./redux/store/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createAppStore()}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
