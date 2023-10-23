import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/common.css";
import App from "./App";

import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import Reducers from "./redux/Reducers";

// const store = configureStore({ reducer: Reducers });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <HelmetProvider>
    <App />
  </HelmetProvider>
  // </React.StrictMode>
);
