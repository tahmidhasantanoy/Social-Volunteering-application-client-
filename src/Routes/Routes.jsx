import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
        {
            path : "/",
            element : <Home/>
        }
    ]
  },
]);

export default router;
