import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import HomeController from "./controller/HomeController.jsx";
import AuthProvider from "./model/provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeController />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </React.StrictMode>
);
