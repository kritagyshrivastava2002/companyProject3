import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-white-800 text-black px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold">  <img
            src="https://s3-alpha-sig.figma.com/img/e301/e9c9/53dbd57815857c13a1ccdc265e6de37b?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KxESYVmnShqBwK7q0RRxtlvI9jHZQZGFCDPZDTib-MAqvTe2oi~r5B298iqoeFrGaAbMxOKqMUSRjuRnX0y9QI7g0T-p8vpd~ZOcq9H-yl6fLsiD73r8p~L5poC8iv5LxkpuqNco9xDUh92GySZZ~qomHKCeaaoo7RG8EQQBDwy3vZ~6JY1LkcEfs2SYe2BXSUTj2UyALzfpTP942lutbbA8N65zmZgheDJMMDGqaxU-izcAQfBnvJIprP7EFyoiOAUiLkUykeAAEx96tfyi0cu2l22vaEwGF~mhhORpZpwwxHMMv9VhNGwFQi~FBpsYd0kwP3Sh10ffHrVYX3mAxw__" 
            alt="Logo"
            className="h-16 w-auto"
          /></div>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link to="/HeroSection" href="#" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/Galaxy" className="hover:text-blue-400 transition">Gallery</Link>
        <Link to="/Teacher" className="hover:text-blue-400 transition">Teachers</Link>
        <Link to="/ContactUs" className="hover:text-blue-400 transition">Contact Us</Link>
        <Link to="/ProgramStructure" className="hover:text-blue-400 transition">ProgramStructure</Link>
      </div>


      <div className="flex gap-3">
        <Link  to="/LogIn" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm font-medium">
          Login
        </Link>
        <Link to="SignUp" className="bg-White-500 hover:bg-green-600 px-4 py-2 rounded text-sm font-medium">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
