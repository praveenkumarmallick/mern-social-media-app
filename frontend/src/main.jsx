import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={
        "813278877377-17emgps0diqp29hql1gpu48i8uk7jipo.apps.googleusercontent.com"
      }
    >
      <Router>
        <App />
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
