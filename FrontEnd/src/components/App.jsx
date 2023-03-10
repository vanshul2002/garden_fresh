import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './header';
import Hero from './hero';
import Login from './login';
import Signup from './signup';
function App(){
    return (
     <div className=' p-4'>
          <Login/>
    </div>
    )
}
export default App