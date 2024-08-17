import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./main.css";
import { LoadingIndicator } from "./components/loading-indicator/LoadingIndicator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} fallbackElement={<LoadingIndicator />} />
  </React.StrictMode>,
);
