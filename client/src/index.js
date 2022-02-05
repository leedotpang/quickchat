import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts";
import App from "./App";
import { GlobalStyles } from "./components/styled";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("qc-root")
);
