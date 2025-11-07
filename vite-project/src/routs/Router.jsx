import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Landing from "../ScreanPages/Landing/Landing";
import RegisterPage from "../screens/registerPage"
import LayOut from '../LayOut/LayOut';

const Router= createBrowserRouter(
  [
    {
      path:"/",
      element:<LayOut/>,
      children:[
        {
          path:'/',
          element : <Landing/>
        },
        {
          path:'/login',
          element:<login/>
        },
        {
          path:'/register',
          element:<RegisterPage/>
        },
      ]
    }  
  ]
)


export default Router
