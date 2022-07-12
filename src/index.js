import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/configureStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
