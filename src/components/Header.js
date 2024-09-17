import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";

function Header() {
  const {currentUser} = useAuth();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <header className="bg-space text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-3xl font-bold">
          <Link to="/">Astro Blog</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`hover:text-star ${
              location.pathname === "/" ? "border-b-2 border-star" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`hover:text-star ${
              location.pathname === "/blog" ? "border-b-2 border-star" : ""
            }`}
          >
            Blog
          </Link>
          {currentUser ? (
            <button onClick={handleSignOut} className="hover:text-star">
              Sign Out
            </button>
          ) : (
            <Link
              to="/signin"
              className={`hover:text-star ${
                location.pathname === "/signin" ? "border-b-2 border-star" : ""
              }`}
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
