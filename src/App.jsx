import { useState } from "react";

import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const DefaultRoute = () => {
  const loginData = JSON.parse(localStorage.getItem("authData"));
  if (loginData) {
    return <Navigate to="/login" replace />;
  }
  return <Navigate to="/register" replace />;
};

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
  ]);
  return <RouterProvider router={route} />;
}

export default App;
