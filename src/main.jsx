import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { EditDocxControl } from "./components/editDocx/EditDocxControl";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/myprofile",
    element: <App />,
  },
  {
    path: "/myprofile/edit",
    element: <EditDocxControl />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
