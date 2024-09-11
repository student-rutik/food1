import './App.css';
import React from "react";

// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Myorder from "./screens/Myorder";
import {CartProvider} from "./components/ContextReducer"

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";


function App() {
  return (
   <CartProvider>
      <Router>
     <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/myorder" element={<Myorder/>}/>
        </Routes>
     </div>
   </Router>
   </CartProvider>
    
  );
}

export default App;


