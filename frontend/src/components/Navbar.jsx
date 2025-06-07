import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
         <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-blue-400">
               Streamy
            </Link>
         </div>
         <div>
            <Link to="/login" >
               <button className="text-white px-8 py-2 bg-blue-600 font-semibold hover:bg-white hover:text-blue-600 transition rounded-3xl">Login</button>
            </Link>
         </div>
      </nav>
   )
}

export default Navbar