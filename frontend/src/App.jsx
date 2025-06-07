import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Browse from "./pages/Browse";

const App = () => {
   return (
      <Routes>
         <Route element={<Layout />}>
            {/* All routes here will render inside Layout */}
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
         </Route>

         {/* Routes that don't use Layout (no navbar, different background) */}
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
      </Routes>
   );
};

export default App;
