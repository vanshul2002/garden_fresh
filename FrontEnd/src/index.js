import React from 'react';
import ReactDOM from 'react-dom/client';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
import "./index.css"
import Header from "./components/header.jsx"
import Hero from "./components/hero.jsx"
import Login from "./components/login.jsx"
import Signup from "./components/signup.jsx"
const router = createBrowserRouter([
   {
     path: "/",
     element: <div>
      <Header/>
      <Hero/>
     </div>,
   },
   {
       path: "/login",
      element: <Login />,
   },
   {
         path: "/signup",
         element: <Signup />,
   }
 ]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );

