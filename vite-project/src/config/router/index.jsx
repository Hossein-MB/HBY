import { createBrowserRouter } from "react-router-dom";
import React, { Children, Component } from "react";
import RegisterPage from "../../screens/registerPage";
import MainBox from "../../components/register/MainBox";
const Router = createBrowserRouter([
  {
    path: "/",
    Component: RegisterPage,
    children: [
      {
        index:true,
        path:"step1",
        Component: MainBox,
      },
    ],
  },
]);
export { Router };
