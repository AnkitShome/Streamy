import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950">
         <Navbar />
         <main className="px-6 py-8 max-w-7xl mx-auto">
            <Outlet />
         </main>
      </div>
   );
};

export default Layout;
