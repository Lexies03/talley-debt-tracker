import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import App from "./App.jsx";
import HomeController from "./controller/HomeController.jsx";
import Log from "./view/components/modal/LoginModal.jsx";
import Dashboard from "./view/pages/DashboardPage.jsx";
import { AuthProvider } from "./model/provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeController />,
  },
  {
    path: "/log",
    element: <Log />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
