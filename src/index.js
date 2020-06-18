import React from "react";
import ReactDOM from "react-dom";
import { InfoProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <InfoProvider>
      <Router>
        <App />
      </Router>
    </InfoProvider>
  </React.StrictMode>,
  rootElement
);
