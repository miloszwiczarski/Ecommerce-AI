import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../views/Home/Home";

const HomeRoutes = [
  {
    path: "/test",
    layout: BaseLayout, 
    element: <h1>Home Page</h1>, // Uproszczony komponent testowy
  },
  {
    path: "/",
    layout: BaseLayout,
    element: <Home />,
  },
  {
    path: "/home",
    layout: BaseLayout,
    element: <Home />,
  },
  // Add other routes as needed
];

export default HomeRoutes;
