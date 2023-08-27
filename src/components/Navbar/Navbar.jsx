import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="py-4 border-b">
      <div class="navbar-container">
        <div class="logo">
          <Link
            className="text-xl"
            style={{ fontFamily: "monospace" }}
            to={"/"}
          >
            Jubair's Blog
          </Link>
        </div>
        <div class="auth-buttons">
          <button class="btn btn-primary">sign in</button>
          <button class="btn btn-outline">sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
