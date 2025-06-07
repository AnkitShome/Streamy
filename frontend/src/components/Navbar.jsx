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
      <nav className="bg-black/20 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-8">
               <Link
                  to="/"
                  className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
               >
                  Streamy
               </Link>
               {/* Add navigation links here if needed */}
               <div className="hidden md:flex space-x-6">
                  <Link
                     to="#"
                     className="text-gray-300 hover:text-white transition-colors"
                  >
                     Browse
                  </Link>
                  <Link
                     to="#"
                     className="text-gray-300 hover:text-white transition-colors"
                  >
                     Following
                  </Link>
                  <Link
                     to="#"
                     className="text-gray-300 hover:text-white transition-colors"
                  >
                     Esports
                  </Link>
               </div>
            </div>

            {/* Search form */}
            <form
               onSubmit={(e) => handleSubmit(e)}
               className="hidden sm:flex items-center bg-gray-800 rounded-xl px-6 py-2 shadow-sm flex-1 max-w-md mx-8"
            >
               <input
                  type="text"
                  placeholder="Search"
                  className="outline-none bg-transparent text-sm w-full text-gray-200 placeholder-gray-400"
               />
            </form>

            {/* Auth buttons/user info */}
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
                  className="text-white px-6 py-2 bg-purple-600 hover:bg-purple-700 font-semibold rounded-lg transition"
               >
                  Login
               </button>
            )}
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
