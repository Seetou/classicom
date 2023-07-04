import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import NavigationContextProvider from "./store/NavigationContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationContextProvider>
        <App />
      </NavigationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
