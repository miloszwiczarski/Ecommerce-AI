import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import CartContainer from "../views/Cart/CartContainer";

const PrivateRoutes = [
  {
    path: "/smart-shop/cart",
    layout: (props) => <div>{props.children}</div>,
    element: <h1>Cart Page</h1>, // Komponent testowy
  }
];

export default PrivateRoutes;
