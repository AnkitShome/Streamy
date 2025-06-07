"use client";

import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
   const { openSignIn } = useClerk();
   const { user, isSignedIn } = useUser();

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-md">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
               {/* Left: Logo + Nav Links */}
               <div className="flex items-center space-x-8">
                  <Link
                     to="/"
                     className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  >
                     Streamy
                  </Link>

                  {/* Navigation Links - hidden on small screens */}
                  <div className="hidden md:flex space-x-6">
                     <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                        Browse
                     </Link>
                     <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                        Following
                     </Link>
                     <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                        Esports
                     </Link>
                  </div>
               </div>

               {/* Middle: Search Form - shrink on small screens */}
               <form onSubmit={handleSubmit} className="hidden sm:flex flex-1 max-w-md mx-8">
                  <input
                     type="text"
                     placeholder="Search"
                     className="w-full rounded-xl bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-600"
                  />
               </form>

               {/* Right: Auth buttons or User info */}
               <div>
                  {isSignedIn ? (
                     <div className="flex items-center gap-4">
                        <p className="text-sm text-gray-300 whitespace-nowrap">
                           Hi, {user?.firstName} {user?.lastName}
                        </p>
                        <UserButton
                           appearance={{
                              elements: {
                                 userButtonAvatarBox: "w-10 h-10",
                              },
                           }}
                        />
                     </div>
                  ) : (
                     <button
                        onClick={() => openSignIn()}
                        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
                     >
                        Login
                     </button>
                  )}
               </div>
            </div>
         </div>
      </nav>

   );
};

export default Navbar;


// import { Link } from "react-router-dom";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

// const Navbar = () => {
//    const { openSignIn } = useClerk();
//    const { user, isSignedIn } = useUser();

//    const handleSubmit = (e) => {
//       e.preventDefault()
//    }

//    return (
//       <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
//          <div className="text-2xl font-bold">
//             <Link to="/" className="hover:text-blue-400">
//                Streamy
//             </Link>
//          </div>
//          <div>
//             <form onSubmit={e => handleSubmit(e)} className="flex items-center bg-gray-800 rounded-xl px-6 py-2 shadow-sm">
//                <input type="text" placeholder="Search" className="outline-none bg-transparent text-sm w-full" />
//             </form>
//          </div>

//          {isSignedIn ? (
//             <div className="flex items-center gap-3">
//                <p className="text-sm">Hi, {user?.firstName} {user?.lastName}</p>
//                <UserButton
//                   appearance={{
//                      elements: {
//                         userButtonAvatarBox: "w-10 h-10",
//                      },
//                   }}
//                />
//             </div>
//          ) : (
//             <div>
//                <button
//                   onClick={() => openSignIn()}
//                   className="text-white px-8 py-2 bg-blue-600 font-semibold hover:bg-white hover:text-blue-600 transition rounded-3xl"
//                >
//                   Login
//                </button>
//             </div>
//          )}
//       </nav>
//    );
// };

// export default Navbar;
