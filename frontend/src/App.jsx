import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard'; // optional
import Navbar from './components/Navbar'; // if you have one

function ProtectedRoute({ children }) {
   return (
      <>
         <SignedIn>{children}</SignedIn>
         <SignedOut><RedirectToSignIn /></SignedOut>
      </>
   );
}

function App() {
   return (
      <>
         <Navbar /> {/* Optional */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
            <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
            <Route
               path="/dashboard"
               element={
                  <ProtectedRoute>
                     <Dashboard />
                  </ProtectedRoute>
               }
            />
         </Routes>
      </>
   );
}

export default App;


// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Layout from "./layout/Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import Browse from "./pages/Browse";

// const App = () => {
//    return (
//       <Routes>
//          <Route element={<Layout />}>
//             {/* All routes here will render inside Layout */}
//             <Route path="/" element={<Home />} />
//             <Route path="/browse" element={<Browse />} />
//          </Route>

//          {/* Routes that don't use Layout (no navbar, different background) */}
//          <Route path="/login" element={<Login />} />
//          <Route path="/register" element={<Register />} />
//       </Routes>
//    );
// };

// export default App;
