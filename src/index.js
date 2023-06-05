import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_ID
}

console.log(tagManagerArgs)

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
