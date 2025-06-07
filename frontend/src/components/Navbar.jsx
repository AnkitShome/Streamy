import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
   const { openSignIn } = useClerk();
   const { user, isSignedIn } = useUser();

   const handleSubmit = (e) => {
      e.preventDefault()
   }

   return (
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
         <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-blue-400">
               Streamy
            </Link>
         </div>
         <div>
            <form onSubmit={e => handleSubmit(e)} className="flex items-center bg-gray-800 rounded-xl px-6 py-2 shadow-sm">
               <input type="text" placeholder="Search" className="outline-none bg-transparent text-sm w-full" />
            </form>
         </div>

         {isSignedIn ? (
            <div className="flex items-center gap-3">
               <p className="text-sm">Hi, {user?.firstName} {user?.lastName}</p>
               <UserButton
                  appearance={{
                     elements: {
                        userButtonAvatarBox: "w-10 h-10",
                     },
                  }}
               />
            </div>
         ) : (
            <div>
               <button
                  onClick={() => openSignIn()}
                  className="text-white px-8 py-2 bg-blue-600 font-semibold hover:bg-white hover:text-blue-600 transition rounded-3xl"
               >
                  Login
               </button>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
